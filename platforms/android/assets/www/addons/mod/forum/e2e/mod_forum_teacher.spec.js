// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

describe('User can manage course forum as Teacher', function () {

    it('View pinned discussion as a Teacher', function (done) {
        return MM.loginAsTeacher().then(function () {
            return MM.clickOnInSideMenu('Course overview');
        }).then(function () {
            return MM.clickOn('Digital Literacy');
        }).then(function () {
            return MM.clickOn('Background reading');
        }).then(function () {
            return MM.clickOn('Join the digital literacy discussions');
        }).then(function () {
            browser.sleep(5000); // Wait for  css to render.
            expect(MM.getView().getText()).toContain('Share your thoughts');
            expect(MM.getView().getText()).toContain('How to use this space');
            expect($('i[class="icon ion-pin"]').isPresent()).toBeTruthy();
        }).then(function () {
            done();
        });
    });

    it('Add a new pinned discussion topic as Teacher', function (done) {
        return MM.loginAsTeacher().then(function () {
            return MM.clickOnInSideMenu('Course overview');
        }).then(function () {
            return MM.clickOn('Digital Literacy');
        }).then(function () {
            return MM.clickOn('Background reading');
        }).then(function () {
            return MM.clickOn('Join the digital literacy discussions');
        }).then(function () {
            return MM.clickOn('Add a new discussion topic');
        }).then(function () {
            browser.sleep(5000); // Wait for css to render.
            $('[ng-model="newDiscussion.subject"]').sendKeys('Test Subject');
            browser.sleep(5000); // Wait for css to render.
            return browser.switchTo().frame($('#cke_1_contents iframe').click().sendKeys('Test Message'));
        }).then(function () {
            return browser.sleep(5000); // Wait for css to render.
        }).then(function () {
            return MM.clickOnElement(element.all(by.css('label[class="toggle disable-user-behavior"]')).get(1));
        }).then(function () {
            return browser.sleep(5000); // Wait for css to render.
        }).then(function () {
            return MM.goToBottomAndClick('Post to forum');
        }).then(function () {
            done();
        });
    });

});