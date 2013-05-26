// version 0.01

(function ($, window, document, undefined) {

    var Url = {
        init: function () {
            this.prop = 'value';
        }
    }

    $.fn.breadcrumb = function (options) {
        var settings = $.extend({}, $.fn.breadcrumb.defaults, options);

        return this.each(function () {
            var $this = $(this);
            var links = new Array();
            var $link = settings.navigation.find('a[href="' + removeTrailingSlash(settings.initUrl) + '"]');

            if (settings.title !== undefined) {
                links.push(new Url(settings.title, ''));
            }

            // consider if the initUrl doesn't exist
            if ($link.length === 1) {
                links.push(new Url($link.text(), settings.initUrl));
            }

            var $ul = $link;

            while ($ul.closest('ul').length === 1) {
                $link = $ul.closest('ul').siblings('a');
                if ($link.text() === '') {
                    links.push(getLinkByUrl(settings.home));
                    break;
                }
                links.push(new Url($link.text(), $link.attr('href')));
                $ul = $link;
            }

            if (links.length > 0) {
                $this.html(buildBreadCrumb(links));
            }
        });

        function Url(name, url) {
            this.name = name;
            this.url = url;
        }

        function removeTrailingSlash(url) {
            if (url !== '/') {
                return url.replace(/\/$/, "");
            }

            return url;
        }

        function getLinkByUrl(url) {
            if (url === undefined) {
                url = '/';
            }
            var $link = settings.navigation.find('a[href="' + removeTrailingSlash(url) + '"]');
            return new Url($link.text(), url);
        }

        function buildBreadCrumb(links) {
            var i = links.length,
                b = '';

            while (i--) {
                if (i === 0) {
                    b += '<li class="active">' + links[i].name + '</li>';
                    continue;
                }
                b += '<li><a href="' + links[i].url + ' ">' + links[i].name + '</a><span class="divider">/</span></li>';
            }

            return '<ul class="breadcrumb">' + b + '</ul>';
        }
    }

    $.fn.breadcrumb.defaults = {
        initUrl: window.location.pathname,
        navigation: $('#nav'),
        home: '/',
        title: undefined,
        ignoreList: undefined
    };
}(jQuery, window, document));