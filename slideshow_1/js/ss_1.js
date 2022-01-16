/**
 * ProjectName.js v1.x.x
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright year, Name
 * http://www.website.com
 */
; (function (global) {

    'use strict';

    //Private vars
    let
        //Purpose
        x,
        //Purpose
        y,
        //Purpose
        z;

    //Extend features
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    //Generate an Object
    var ProjectName = function (arg, options) {
        //Return a new Object via init()
        //With this technique we can create 'new' objects without directly
        //saying 'new'
        return new ProjectName.init(arg, options);
    }

    //Constructor 
    ProjectName.init = function (arg, options) {

        var self = this;

        self.firstName = arg;

        self.options = extend(self.defaults, options);
    }


    ProjectName.prototype = {
        defaults: {
            // page to start on
            startPage: 1,
            // vertical or horizontal flip
            orientation: 'vertical',
            // ltr (left to right) or rtl (right to left)
            direction: 'ltr'
        },
        /**
         * Using structure from w3:
         * https://www.w3schools.com/w3css/w3css_web_javascript.asp
        */
        hide: function (sel) {
            this.hideElements(this.getElements(sel));
        },
        hideElements: function (elements) {
            var i, l = elements.length;
            for (i = 0; i < l; i++) {
                this.hideElement(elements[i]);
            }
        },
        hideElement: function (element) {
            this.styleElement(element, "display", "none");
        },
        show: function (sel, a) {
            var elements = this.getElements(sel);
            if (a) { this.hideElements(elements); }
            this.showElements(elements);
        },
        showElements: function (elements) {
            var i, l = elements.length;
            for (i = 0; i < l; i++) {
                this.showElement(elements[i]);
            }
        },
        showElement: function (element) {
            this.styleElement(element, "display", "block");
        },
        addStyle: function (sel, prop, val) {
            this.styleElements(this.getElements(sel), prop, val);
        },
        styleElements: function (elements, prop, val) {
            var i, l = elements.length;
            for (i = 0; i < l; i++) {
                this.styleElement(elements[i], prop, val);
            }
        },
        styleElement: function (element, prop, val) {
            element.style.setProperty(prop, val);
        },
        addClass: function (sel, name) {
            this.addClassElements(this.getElements(sel), name);
        },
        addClassElements: function (elements, name) {
            var i, l = elements.length;
            for (i = 0; i < l; i++) {
                this.addClassElement(elements[i], name);
            }
        },
        addClassElement: function (element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    element.className += " " + arr2[i];
                }
            }
        },
        removeClass: function (sel, name) {
            this.removeClassElements(this.getElements(sel), name);
        },
        //unused vars here
        removeClassElements: function (elements, name) {
            var i, l = elements.length, arr1, arr2, j;
            for (i = 0; i < l; i++) {
                this.removeClassElement(elements[i], name);
            }
        },
        removeClassElement: function (element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");
        },
        toggleShow: function (sel) {
            var i, x = this.getElements(sel), l = x.length;
            for (i = 0; i < l; i++) {
                if (x[i].style.display == "none") {
                    this.styleElement(x[i], "display", "block");
                } else {
                    this.styleElement(x[i], "display", "none");
                }
            }
        },
        toggleClass: function (sel, c1, c2) {
            this.toggleClassElements(this.getElements(sel), c1, c2);
        },
        toggleClassElements: function (elements, c1, c2) {
            var i, l = elements.length;
            for (i = 0; i < l; i++) {
                this.toggleClassElement(elements[i], c1, c2);
            }
        },
        toggleClassElement: function (element, c1, c2) {
            var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
            t1 = (c1 || "");
            t2 = (c2 || "");
            t1Arr = t1.split(" ");
            t2Arr = t2.split(" ");
            arr = element.className.split(" ");
            if (t2Arr.length == 0) {
                allPresent = true;
                for (j = 0; j < t1Arr.length; j++) {
                    if (arr.indexOf(t1Arr[j]) == -1) { allPresent = false; }
                }
                if (allPresent) {
                    this.removeClassElement(element, t1);
                } else {
                    this.addClassElement(element, t1);
                }
            } else {
                allPresent = true;
                for (j = 0; j < t1Arr.length; j++) {
                    if (arr.indexOf(t1Arr[j]) == -1) { allPresent = false; }
                }
                if (allPresent) {
                    this.removeClassElement(element, t1);
                    this.addClassElement(element, t2);
                } else {
                    this.removeClassElement(element, t2);
                    this.addClassElement(element, t1);
                }
            }
        },
        getElements: function (id) {
            if (typeof id == "object") {
                return [id];
            } else {
                return document.querySelectorAll(id);
            }
        },
        filterHTML: function (id, sel, filter) {
            var a, b, c, i, ii, iii, hit;
            a = this.getElements(id);
            for (i = 0; i < a.length; i++) {
                b = a[i].querySelectorAll(sel);
                for (ii = 0; ii < b.length; ii++) {
                    hit = 0;
                    if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                        hit = 1;
                    }
                    c = b[ii].getElementsByTagName("*");
                    for (iii = 0; iii < c.length; iii++) {
                        if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                            hit = 1;
                        }
                    }
                    if (hit == 1) {
                        b[ii].style.display = "";
                    } else {
                        b[ii].style.display = "none";
                    }
                }
            }
        },
        sortHTML: function (id, sel, sortvalue) {
            var a, b, i, ii, y, bytt, v1, v2, cc, j;
            a = this.getElements(id);
            for (i = 0; i < a.length; i++) {
                for (j = 0; j < 2; j++) {
                    cc = 0;
                    y = 1;
                    while (y == 1) {
                        y = 0;
                        b = a[i].querySelectorAll(sel);
                        for (ii = 0; ii < (b.length - 1); ii++) {
                            bytt = 0;
                            if (sortvalue) {
                                v1 = b[ii].querySelector(sortvalue).innerText;
                                v2 = b[ii + 1].querySelector(sortvalue).innerText;
                            } else {
                                v1 = b[ii].innerText;
                                v2 = b[ii + 1].innerText;
                            }
                            v1 = v1.toLowerCase();
                            v2 = v2.toLowerCase();
                            if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
                                bytt = 1;
                                break;
                            }
                        }
                        if (bytt == 1) {
                            b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
                            y = 1;
                            cc++;
                        }
                    }
                    if (cc > 0) { break; }
                }
            }
        },
        slideshow: function (sel, ms, func) {
            var i, ss, x = this.getElements(sel), l = x.length;
            ss = {};
            ss.current = 1;
            ss.x = x;
            ss.ondisplaychange = func;
            if (!isNaN(ms) || ms == 0) {
                ss.milliseconds = ms;
            } else {
                ss.milliseconds = 1000;
            }
            ss.start = function () {
                ss.display(ss.current)
                if (ss.ondisplaychange) { ss.ondisplaychange(); }
                if (ss.milliseconds > 0) {
                    window.clearTimeout(ss.timeout);
                    ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
                }
            };
            ss.next = function () {
                ss.current += 1;
                if (ss.current > ss.x.length) { ss.current = 1; }
                ss.start();
            };
            ss.previous = function () {
                ss.current -= 1;
                if (ss.current < 1) { ss.current = ss.x.length; }
                ss.start();
            };
            ss.display = function (n) {
                this.styleElements(ss.x, "display", "none");
                this.styleElement(ss.x[n - 1], "display", "block");
            }
            ss.start();
            return ss;
        },
        getHttpData: function (file, func) {
            w3.http(file, function () {
                if (this.readyState == 4 && this.status == 200) {
                    func(this.responseText);
                }
            });
        },
        getHttpObject: function (file, func) {
            w3.http(file, function () {
                if (this.readyState == 4 && this.status == 200) {
                    func(JSON.parse(this.responseText));
                }
            });
        },
        displayHttp: function (id, file) {
            this.http(file, function () {
                if (this.readyState == 4 && this.status == 200) {
                    this.displayObject(id, JSON.parse(this.responseText));
                }
            });
        },
        http: function (target, readyfunc, xml, method) {
            var httpObj;
            if (!method) { method = "GET"; }
            if (window.XMLHttpRequest) {
                httpObj = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                httpObj = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (httpObj) {
                if (readyfunc) { httpObj.onreadystatechange = readyfunc; }
                httpObj.open(method, target, true);
                httpObj.send(xml);
            }
        },
        getElementsByAttribute: function (x, att) {
            var arr = [], arrCount = -1, i, l, y = x.getElementsByTagName("*"), z = att.toUpperCase();
            l = y.length;
            for (i = -1; i < l; i += 1) {
                if (i == -1) { y[i] = x; }
                if (y[i].getAttribute(z) !== null) { arrCount += 1; arr[arrCount] = y[i]; }
            }
            return arr;
        },
        //End - w3 Structure
        logConfiguration: function () {
            var self = this;
            for (var key in self.defaults) {
                console.log(key, self.defaults[key]);
            }
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return self;
        }
    }

    //Set prototype of all functions created from init()
    ProjectName.init.prototype = ProjectName.prototype;

    // add to global namespace
    if (typeof global.ProjectName === "undefined")
        global.ProjectName = global.ProjectAlias = ProjectName;
    else throw "ProjectName cannot be added to global namespace";

})(window);


var slideshow = ProjectName();
// slideshow.hide('.container');
// slideshow.show('.container');
// slideshow.addStyle('.container', 'border', '5px solid green');
// slideshow.toggleShow('.container');
// slideshow.toggleShow('.container');