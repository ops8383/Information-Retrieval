require(['wikia.window','jquery'],function(window,$){'use strict';function firstMenuValidator(){var $localNavPreview=$('.local-navigation-preview'),$tabs=$localNavPreview.find('.wds-tabs__tab'),tabsWidth=0;$tabs.each(function(){tabsWidth+=$(this).outerWidth(true);});return tabsWidth<=$localNavPreview.width();}function initPreview(){if(window.wgIsWikiNavMessage){var $saveButton=$('#wpSave');$saveButton.hide().attr('disabled',true);$.getMessages('Oasis-navigation-v2').done(function(){$(window).bind('EditPageAfterRenderPreview',function(ev,previewNode){previewNode.children().removeClass('WikiaArticle');var firstMenuValid=firstMenuValidator(),menuParseError=!!previewNode.find('nav > ul').attr('data-parse-errors'),errorMessages=[];if(menuParseError){errorMessages.push($.msg('oasis-navigation-v2-magic-word-validation'));}if(!firstMenuValid){errorMessages.push($.msg('oasis-navigation-v2-level1-validation'));}if(errorMessages.length>0){$('#publish').remove();new window.BannerNotification(
errorMessages.join('</br>'),'error',$('.modalContent .ArticlePreview')).show();}else{$saveButton.attr('disabled',false);}previewNode.find('nav > ul a').click(function(){if($(this).attr('href')==='#'){return false;}});previewNode.find('.msg > a').click(function(){window.location=this.href;});});});$(window).bind('EditPagePreviewClosed',function(){$saveButton.attr('disabled',true);});$('#wpPreview').parent().removeClass('secondary');$('#EditPageMain').addClass('editpage-wikianavmode');}}$(function(){initPreview();});});;require(['jquery',require.optional('GlobalShortcutsSearch'),'wikia.cookies'],function($,GlobalShortcutsSearch,cookies){$('.wds-community-header__wiki-buttons .wiki-button-all-shortcuts').click(function(event){if(GlobalShortcutsSearch){var searchModal=new GlobalShortcutsSearch();searchModal.open();}event.preventDefault();});$('.wds-community-header__wiki-buttons .wiki-button-add-video').click(function(){cookies.set('special-video:add-video',1,{path:'/',expires:60000});});}
);;require(['jquery','wikia.tracker'],function($,tracker){'use strict';var track=tracker.buildTrackingFunction({category:'community-header',trackingMethod:'analytics',action:tracker.ACTIONS.CLICK});$(function(){$('.wds-community-header').on('click','[data-tracking]',function(){track({label:this.dataset.tracking});});});});;