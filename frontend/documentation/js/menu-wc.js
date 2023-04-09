'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@contapp/frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountsFeatureModule.html" data-type="entity-link" >AccountsFeatureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountsFeatureModule-1b1acae53a75fde15122d31f3247b06a67e3f087e66050209e3dced2d27cf9c7b6a73ccd8dc772e84784f11ef6fde93e47e23370c139faa8e7bcace49fee1399"' : 'data-target="#xs-injectables-links-module-AccountsFeatureModule-1b1acae53a75fde15122d31f3247b06a67e3f087e66050209e3dced2d27cf9c7b6a73ccd8dc772e84784f11ef6fde93e47e23370c139faa8e7bcace49fee1399"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountsFeatureModule-1b1acae53a75fde15122d31f3247b06a67e3f087e66050209e3dced2d27cf9c7b6a73ccd8dc772e84784f11ef6fde93e47e23370c139faa8e7bcace49fee1399"' :
                                        'id="xs-injectables-links-module-AccountsFeatureModule-1b1acae53a75fde15122d31f3247b06a67e3f087e66050209e3dced2d27cf9c7b6a73ccd8dc772e84784f11ef6fde93e47e23370c139faa8e7bcace49fee1399"' }>
                                        <li class="link">
                                            <a href="injectables/AccountsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountsPageModule.html" data-type="entity-link" >AccountsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountsPageModule-1d2d9640434d72d41ea42f69d9ccaacc30324d05aefbf0b8380aa6c8c7f83ba7894c7d60ce4da4dac1d7b2d5c36b99e03fd006be72f21bc010846fe3765a33ab"' : 'data-target="#xs-components-links-module-AccountsPageModule-1d2d9640434d72d41ea42f69d9ccaacc30324d05aefbf0b8380aa6c8c7f83ba7894c7d60ce4da4dac1d7b2d5c36b99e03fd006be72f21bc010846fe3765a33ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountsPageModule-1d2d9640434d72d41ea42f69d9ccaacc30324d05aefbf0b8380aa6c8c7f83ba7894c7d60ce4da4dac1d7b2d5c36b99e03fd006be72f21bc010846fe3765a33ab"' :
                                            'id="xs-components-links-module-AccountsPageModule-1d2d9640434d72d41ea42f69d9ccaacc30324d05aefbf0b8380aa6c8c7f83ba7894c7d60ce4da4dac1d7b2d5c36b99e03fd006be72f21bc010846fe3765a33ab"' }>
                                            <li class="link">
                                                <a href="components/AccountsPageFormLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsPageFormLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountsPageListLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsPageListLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedBreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedBreadcrumbsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountsPageRoutingModule.html" data-type="entity-link" >AccountsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AccountsUiFeatureModule.html" data-type="entity-link" >AccountsUiFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountsUiFeatureModule-2eb92582a64c0783360a4e9a46df7f5f95d6ecf978ca359fc53d2e6ac26972d38394f7bfe95efcc783b2cf38b699f18635ae17a6deda1f8d9371f0fbc1095362"' : 'data-target="#xs-components-links-module-AccountsUiFeatureModule-2eb92582a64c0783360a4e9a46df7f5f95d6ecf978ca359fc53d2e6ac26972d38394f7bfe95efcc783b2cf38b699f18635ae17a6deda1f8d9371f0fbc1095362"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountsUiFeatureModule-2eb92582a64c0783360a4e9a46df7f5f95d6ecf978ca359fc53d2e6ac26972d38394f7bfe95efcc783b2cf38b699f18635ae17a6deda1f8d9371f0fbc1095362"' :
                                            'id="xs-components-links-module-AccountsUiFeatureModule-2eb92582a64c0783360a4e9a46df7f5f95d6ecf978ca359fc53d2e6ac26972d38394f7bfe95efcc783b2cf38b699f18635ae17a6deda1f8d9371f0fbc1095362"' }>
                                            <li class="link">
                                                <a href="components/AccountsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidationErrorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationErrorsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnalysisFeatureModule.html" data-type="entity-link" >AnalysisFeatureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AnalysisFeatureModule-b0cdc762eeec5fd50e934afdd5d86ba35fe19e039a8278632e9e46c1a1982128cc2dcbffca3688378533ca7d7178b6157c234a29f6b60fe0356c68e4e5ee2ed6"' : 'data-target="#xs-injectables-links-module-AnalysisFeatureModule-b0cdc762eeec5fd50e934afdd5d86ba35fe19e039a8278632e9e46c1a1982128cc2dcbffca3688378533ca7d7178b6157c234a29f6b60fe0356c68e4e5ee2ed6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnalysisFeatureModule-b0cdc762eeec5fd50e934afdd5d86ba35fe19e039a8278632e9e46c1a1982128cc2dcbffca3688378533ca7d7178b6157c234a29f6b60fe0356c68e4e5ee2ed6"' :
                                        'id="xs-injectables-links-module-AnalysisFeatureModule-b0cdc762eeec5fd50e934afdd5d86ba35fe19e039a8278632e9e46c1a1982128cc2dcbffca3688378533ca7d7178b6157c234a29f6b60fe0356c68e4e5ee2ed6"' }>
                                        <li class="link">
                                            <a href="injectables/AnalysisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnalysisPageModule.html" data-type="entity-link" >AnalysisPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AnalysisPageModule-0ec02a8316c2d549e9b804b638091f1152ce6915562721c439fee85e19f5525b6bc7ce48743371d26918470cfbe6c0310f6114840cbc2e0aa22aab1111689b1c"' : 'data-target="#xs-components-links-module-AnalysisPageModule-0ec02a8316c2d549e9b804b638091f1152ce6915562721c439fee85e19f5525b6bc7ce48743371d26918470cfbe6c0310f6114840cbc2e0aa22aab1111689b1c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnalysisPageModule-0ec02a8316c2d549e9b804b638091f1152ce6915562721c439fee85e19f5525b6bc7ce48743371d26918470cfbe6c0310f6114840cbc2e0aa22aab1111689b1c"' :
                                            'id="xs-components-links-module-AnalysisPageModule-0ec02a8316c2d549e9b804b638091f1152ce6915562721c439fee85e19f5525b6bc7ce48743371d26918470cfbe6c0310f6114840cbc2e0aa22aab1111689b1c"' }>
                                            <li class="link">
                                                <a href="components/AnalysisPageMenuLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisPageMenuLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalysisPageMonthlyLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisPageMonthlyLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedBreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedBreadcrumbsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnalysisPageRoutingModule.html" data-type="entity-link" >AnalysisPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AnalysisUiFeatureModule.html" data-type="entity-link" >AnalysisUiFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AnalysisUiFeatureModule-0917430fb8905fd5ea79323a8f31ea0cfddff5b2dc18e9d278bfcf9c58c3f3de8c39bc32d2ca33d84db9d171b6e30a5a6d8fdc20ecc8d43e0278f54d4730966c"' : 'data-target="#xs-components-links-module-AnalysisUiFeatureModule-0917430fb8905fd5ea79323a8f31ea0cfddff5b2dc18e9d278bfcf9c58c3f3de8c39bc32d2ca33d84db9d171b6e30a5a6d8fdc20ecc8d43e0278f54d4730966c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnalysisUiFeatureModule-0917430fb8905fd5ea79323a8f31ea0cfddff5b2dc18e9d278bfcf9c58c3f3de8c39bc32d2ca33d84db9d171b6e30a5a6d8fdc20ecc8d43e0278f54d4730966c"' :
                                            'id="xs-components-links-module-AnalysisUiFeatureModule-0917430fb8905fd5ea79323a8f31ea0cfddff5b2dc18e9d278bfcf9c58c3f3de8c39bc32d2ca33d84db9d171b6e30a5a6d8fdc20ecc8d43e0278f54d4730966c"' }>
                                            <li class="link">
                                                <a href="components/AnalysisMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalysisMonthlyBalancesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisMonthlyBalancesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalysisMonthlyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisMonthlyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalysisMonthlyForecastsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisMonthlyForecastsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnalysisMonthlyMovementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalysisMonthlyMovementsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AnalysisUiFeatureModule-0917430fb8905fd5ea79323a8f31ea0cfddff5b2dc18e9d278bfcf9c58c3f3de8c39bc32d2ca33d84db9d171b6e30a5a6d8fdc20ecc8d43e0278f54d4730966c"' : 'data-target="#xs-pipes-links-module-AnalysisUiFeatureModule-0917430fb8905fd5ea79323a8f31ea0cfddff5b2dc18e9d278bfcf9c58c3f3de8c39bc32d2ca33d84db9d171b6e30a5a6d8fdc20ecc8d43e0278f54d4730966c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AnalysisUiFeatureModule-0917430fb8905fd5ea79323a8f31ea0cfddff5b2dc18e9d278bfcf9c58c3f3de8c39bc32d2ca33d84db9d171b6e30a5a6d8fdc20ecc8d43e0278f54d4730966c"' :
                                            'id="xs-pipes-links-module-AnalysisUiFeatureModule-0917430fb8905fd5ea79323a8f31ea0cfddff5b2dc18e9d278bfcf9c58c3f3de8c39bc32d2ca33d84db9d171b6e30a5a6d8fdc20ecc8d43e0278f54d4730966c"' }>
                                            <li class="link">
                                                <a href="pipes/CurrencyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6cbf5fcd794f107208d2f0e679f032e1a08985930a29ef94ebd87e4bf09e525e94ec856670c0c5b315af07c43f3ad0f43d11ebdcaf3c3303ebcef9e0ddc5897a"' : 'data-target="#xs-components-links-module-AppModule-6cbf5fcd794f107208d2f0e679f032e1a08985930a29ef94ebd87e4bf09e525e94ec856670c0c5b315af07c43f3ad0f43d11ebdcaf3c3303ebcef9e0ddc5897a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6cbf5fcd794f107208d2f0e679f032e1a08985930a29ef94ebd87e4bf09e525e94ec856670c0c5b315af07c43f3ad0f43d11ebdcaf3c3303ebcef9e0ddc5897a"' :
                                            'id="xs-components-links-module-AppModule-6cbf5fcd794f107208d2f0e679f032e1a08985930a29ef94ebd87e4bf09e525e94ec856670c0c5b315af07c43f3ad0f43d11ebdcaf3c3303ebcef9e0ddc5897a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationFeatureModule.html" data-type="entity-link" >AuthenticationFeatureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationFeatureModule-6ed4754c836d34f34097553640881e9502573a6da5a5f0431075b3e735bc214b9a36483a3e33048bdde94acbcb403c82326f9ceea84795cb0066a147fc0a3cf5"' : 'data-target="#xs-injectables-links-module-AuthenticationFeatureModule-6ed4754c836d34f34097553640881e9502573a6da5a5f0431075b3e735bc214b9a36483a3e33048bdde94acbcb403c82326f9ceea84795cb0066a147fc0a3cf5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationFeatureModule-6ed4754c836d34f34097553640881e9502573a6da5a5f0431075b3e735bc214b9a36483a3e33048bdde94acbcb403c82326f9ceea84795cb0066a147fc0a3cf5"' :
                                        'id="xs-injectables-links-module-AuthenticationFeatureModule-6ed4754c836d34f34097553640881e9502573a6da5a5f0431075b3e735bc214b9a36483a3e33048bdde94acbcb403c82326f9ceea84795cb0066a147fc0a3cf5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationUiFeatureModule.html" data-type="entity-link" >AuthenticationUiFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthenticationUiFeatureModule-6fe1aac6e2e33839273e01571fdc6935edd8fb5ee807ab991addc4e329db3a50102b1ca9764f1b072c46ae03fa0f1ed16d6e7bfa27cd843f161bd6f70334dab7"' : 'data-target="#xs-components-links-module-AuthenticationUiFeatureModule-6fe1aac6e2e33839273e01571fdc6935edd8fb5ee807ab991addc4e329db3a50102b1ca9764f1b072c46ae03fa0f1ed16d6e7bfa27cd843f161bd6f70334dab7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationUiFeatureModule-6fe1aac6e2e33839273e01571fdc6935edd8fb5ee807ab991addc4e329db3a50102b1ca9764f1b072c46ae03fa0f1ed16d6e7bfa27cd843f161bd6f70334dab7"' :
                                            'id="xs-components-links-module-AuthenticationUiFeatureModule-6fe1aac6e2e33839273e01571fdc6935edd8fb5ee807ab991addc4e329db3a50102b1ca9764f1b072c46ae03fa0f1ed16d6e7bfa27cd843f161bd6f70334dab7"' }>
                                            <li class="link">
                                                <a href="components/AuthenticationFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesFeatureModule.html" data-type="entity-link" >CategoriesFeatureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriesFeatureModule-df1d55e0862e23d508fde29cfe0c643e68597fedb94f39f8fc7f8a4fa568e7169718fe0c2c8216104990ef79f80f8edb6f4b542cf35403259b3c8015c132754a"' : 'data-target="#xs-injectables-links-module-CategoriesFeatureModule-df1d55e0862e23d508fde29cfe0c643e68597fedb94f39f8fc7f8a4fa568e7169718fe0c2c8216104990ef79f80f8edb6f4b542cf35403259b3c8015c132754a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesFeatureModule-df1d55e0862e23d508fde29cfe0c643e68597fedb94f39f8fc7f8a4fa568e7169718fe0c2c8216104990ef79f80f8edb6f4b542cf35403259b3c8015c132754a"' :
                                        'id="xs-injectables-links-module-CategoriesFeatureModule-df1d55e0862e23d508fde29cfe0c643e68597fedb94f39f8fc7f8a4fa568e7169718fe0c2c8216104990ef79f80f8edb6f4b542cf35403259b3c8015c132754a"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesPageModule.html" data-type="entity-link" >CategoriesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoriesPageModule-97c29d1008a35ac146fb22821951839ba71bdc79bd468542c0c89e09237e519b3fbbd8dd866e0581036b62b42e3623d68fa679dc56e6dbf664f0b68d63250d14"' : 'data-target="#xs-components-links-module-CategoriesPageModule-97c29d1008a35ac146fb22821951839ba71bdc79bd468542c0c89e09237e519b3fbbd8dd866e0581036b62b42e3623d68fa679dc56e6dbf664f0b68d63250d14"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoriesPageModule-97c29d1008a35ac146fb22821951839ba71bdc79bd468542c0c89e09237e519b3fbbd8dd866e0581036b62b42e3623d68fa679dc56e6dbf664f0b68d63250d14"' :
                                            'id="xs-components-links-module-CategoriesPageModule-97c29d1008a35ac146fb22821951839ba71bdc79bd468542c0c89e09237e519b3fbbd8dd866e0581036b62b42e3623d68fa679dc56e6dbf664f0b68d63250d14"' }>
                                            <li class="link">
                                                <a href="components/CategoriesPageFormLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesPageFormLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriesPageListLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesPageListLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedBreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedBreadcrumbsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesPageRoutingModule.html" data-type="entity-link" >CategoriesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesUiFeatureModule.html" data-type="entity-link" >CategoriesUiFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoriesUiFeatureModule-e697b85eed4c7a07993855952ecc291e030ed4f7a0c344151baf7818552d602753fe6ece450da73f345f1641ccdb03bac14f8b7fdebf028999479014c5c9c765"' : 'data-target="#xs-components-links-module-CategoriesUiFeatureModule-e697b85eed4c7a07993855952ecc291e030ed4f7a0c344151baf7818552d602753fe6ece450da73f345f1641ccdb03bac14f8b7fdebf028999479014c5c9c765"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoriesUiFeatureModule-e697b85eed4c7a07993855952ecc291e030ed4f7a0c344151baf7818552d602753fe6ece450da73f345f1641ccdb03bac14f8b7fdebf028999479014c5c9c765"' :
                                            'id="xs-components-links-module-CategoriesUiFeatureModule-e697b85eed4c7a07993855952ecc291e030ed4f7a0c344151baf7818552d602753fe6ece450da73f345f1641ccdb03bac14f8b7fdebf028999479014c5c9c765"' }>
                                            <li class="link">
                                                <a href="components/CategoriesFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriesTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidationErrorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationErrorsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CategoriesUiFeatureModule-e697b85eed4c7a07993855952ecc291e030ed4f7a0c344151baf7818552d602753fe6ece450da73f345f1641ccdb03bac14f8b7fdebf028999479014c5c9c765"' : 'data-target="#xs-pipes-links-module-CategoriesUiFeatureModule-e697b85eed4c7a07993855952ecc291e030ed4f7a0c344151baf7818552d602753fe6ece450da73f345f1641ccdb03bac14f8b7fdebf028999479014c5c9c765"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CategoriesUiFeatureModule-e697b85eed4c7a07993855952ecc291e030ed4f7a0c344151baf7818552d602753fe6ece450da73f345f1641ccdb03bac14f8b7fdebf028999479014c5c9c765"' :
                                            'id="xs-pipes-links-module-CategoriesUiFeatureModule-e697b85eed4c7a07993855952ecc291e030ed4f7a0c344151baf7818552d602753fe6ece450da73f345f1641ccdb03bac14f8b7fdebf028999479014c5c9c765"' }>
                                            <li class="link">
                                                <a href="pipes/CurrencyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-9e1c5647065f1bde8fca57020c851afee0acf527dabfbe18f66c3ac0b22e6495226f7c320a940d3ef267fff980a45bcb45fbe7376edd04ee14c2fd555a249b95"' : 'data-target="#xs-injectables-links-module-CoreModule-9e1c5647065f1bde8fca57020c851afee0acf527dabfbe18f66c3ac0b22e6495226f7c320a940d3ef267fff980a45bcb45fbe7376edd04ee14c2fd555a249b95"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-9e1c5647065f1bde8fca57020c851afee0acf527dabfbe18f66c3ac0b22e6495226f7c320a940d3ef267fff980a45bcb45fbe7376edd04ee14c2fd555a249b95"' :
                                        'id="xs-injectables-links-module-CoreModule-9e1c5647065f1bde8fca57020c851afee0acf527dabfbe18f66c3ac0b22e6495226f7c320a940d3ef267fff980a45bcb45fbe7376edd04ee14c2fd555a249b95"' }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DatesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-88510c334402d428b9fd50dfca474c7ef1a0adec19f0055a98d056a1dd303ef9302ac53857a68ac5b6cbee885eced7c2e21aed9a11710191b8e7164f435ba01c"' : 'data-target="#xs-components-links-module-DashboardModule-88510c334402d428b9fd50dfca474c7ef1a0adec19f0055a98d056a1dd303ef9302ac53857a68ac5b6cbee885eced7c2e21aed9a11710191b8e7164f435ba01c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-88510c334402d428b9fd50dfca474c7ef1a0adec19f0055a98d056a1dd303ef9302ac53857a68ac5b6cbee885eced7c2e21aed9a11710191b8e7164f435ba01c"' :
                                            'id="xs-components-links-module-DashboardModule-88510c334402d428b9fd50dfca474c7ef1a0adec19f0055a98d056a1dd303ef9302ac53857a68ac5b6cbee885eced7c2e21aed9a11710191b8e7164f435ba01c"' }>
                                            <li class="link">
                                                <a href="components/DashboardMainLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardMainLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedBreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedBreadcrumbsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageRoutingModule.html" data-type="entity-link" >DashboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-312b2072b20f80e41047f967cfd4197b8c21ee6900f2ef8962dc66395bc5b604ec64a407686d1f7c69c2f461a8782cbdec1c01e618bd78dcdd79c6c8222298c1"' : 'data-target="#xs-components-links-module-LayoutModule-312b2072b20f80e41047f967cfd4197b8c21ee6900f2ef8962dc66395bc5b604ec64a407686d1f7c69c2f461a8782cbdec1c01e618bd78dcdd79c6c8222298c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-312b2072b20f80e41047f967cfd4197b8c21ee6900f2ef8962dc66395bc5b604ec64a407686d1f7c69c2f461a8782cbdec1c01e618bd78dcdd79c6c8222298c1"' :
                                            'id="xs-components-links-module-LayoutModule-312b2072b20f80e41047f967cfd4197b8c21ee6900f2ef8962dc66395bc5b604ec64a407686d1f7c69c2f461a8782cbdec1c01e618bd78dcdd79c6c8222298c1"' }>
                                            <li class="link">
                                                <a href="components/AuthLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-4b76e432737bd915736f25e34df015068905c597c3fe6115540be50441577e5be4ee52e9c944346ea8530792473c3fe2d8fe1b65bf118eaea314d276866c8391"' : 'data-target="#xs-components-links-module-LoginPageModule-4b76e432737bd915736f25e34df015068905c597c3fe6115540be50441577e5be4ee52e9c944346ea8530792473c3fe2d8fe1b65bf118eaea314d276866c8391"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-4b76e432737bd915736f25e34df015068905c597c3fe6115540be50441577e5be4ee52e9c944346ea8530792473c3fe2d8fe1b65bf118eaea314d276866c8391"' :
                                            'id="xs-components-links-module-LoginPageModule-4b76e432737bd915736f25e34df015068905c597c3fe6115540be50441577e5be4ee52e9c944346ea8530792473c3fe2d8fe1b65bf118eaea314d276866c8391"' }>
                                            <li class="link">
                                                <a href="components/LoginFormLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginFormLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedBreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedBreadcrumbsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MovementsFeatureModule.html" data-type="entity-link" >MovementsFeatureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovementsFeatureModule-16733bff02ab64b7c5bb401445eb4147b9a75648622a71e516ce712c9b3905c5c3408c22bc812afa62f9a3b378f42040ac122f776a8061d78e26b85fde610a79"' : 'data-target="#xs-injectables-links-module-MovementsFeatureModule-16733bff02ab64b7c5bb401445eb4147b9a75648622a71e516ce712c9b3905c5c3408c22bc812afa62f9a3b378f42040ac122f776a8061d78e26b85fde610a79"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovementsFeatureModule-16733bff02ab64b7c5bb401445eb4147b9a75648622a71e516ce712c9b3905c5c3408c22bc812afa62f9a3b378f42040ac122f776a8061d78e26b85fde610a79"' :
                                        'id="xs-injectables-links-module-MovementsFeatureModule-16733bff02ab64b7c5bb401445eb4147b9a75648622a71e516ce712c9b3905c5c3408c22bc812afa62f9a3b378f42040ac122f776a8061d78e26b85fde610a79"' }>
                                        <li class="link">
                                            <a href="injectables/MovementsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovementsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MovementsTranformer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovementsTranformer</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MovementsPageModule.html" data-type="entity-link" >MovementsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MovementsPageModule-2a0938656e07490303d9781ad52b901c6571faaf68102862b58cbbb17829128b8238dc928bcc3a92f86a03cc6905632798d26cb2cbf918185d52d80816e70880"' : 'data-target="#xs-components-links-module-MovementsPageModule-2a0938656e07490303d9781ad52b901c6571faaf68102862b58cbbb17829128b8238dc928bcc3a92f86a03cc6905632798d26cb2cbf918185d52d80816e70880"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MovementsPageModule-2a0938656e07490303d9781ad52b901c6571faaf68102862b58cbbb17829128b8238dc928bcc3a92f86a03cc6905632798d26cb2cbf918185d52d80816e70880"' :
                                            'id="xs-components-links-module-MovementsPageModule-2a0938656e07490303d9781ad52b901c6571faaf68102862b58cbbb17829128b8238dc928bcc3a92f86a03cc6905632798d26cb2cbf918185d52d80816e70880"' }>
                                            <li class="link">
                                                <a href="components/MovementsPageFormLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovementsPageFormLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovementsPageListLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovementsPageListLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SharedBreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedBreadcrumbsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MovementsPageRoutingModule.html" data-type="entity-link" >MovementsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MovementsUiFeatureModule.html" data-type="entity-link" >MovementsUiFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MovementsUiFeatureModule-0f04417f96e4c3817e23abc45c62e4be66a0cede77e6ccdfa761eb4f0efa2da9971ea6fa3946a57073837117644b5a4e470b80ade93d67db7e570f047a7cd47c"' : 'data-target="#xs-components-links-module-MovementsUiFeatureModule-0f04417f96e4c3817e23abc45c62e4be66a0cede77e6ccdfa761eb4f0efa2da9971ea6fa3946a57073837117644b5a4e470b80ade93d67db7e570f047a7cd47c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MovementsUiFeatureModule-0f04417f96e4c3817e23abc45c62e4be66a0cede77e6ccdfa761eb4f0efa2da9971ea6fa3946a57073837117644b5a4e470b80ade93d67db7e570f047a7cd47c"' :
                                            'id="xs-components-links-module-MovementsUiFeatureModule-0f04417f96e4c3817e23abc45c62e4be66a0cede77e6ccdfa761eb4f0efa2da9971ea6fa3946a57073837117644b5a4e470b80ade93d67db7e570f047a7cd47c"' }>
                                            <li class="link">
                                                <a href="components/MovementsAccountsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovementsAccountsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovementsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovementsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovementsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovementsTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-MovementsUiFeatureModule-0f04417f96e4c3817e23abc45c62e4be66a0cede77e6ccdfa761eb4f0efa2da9971ea6fa3946a57073837117644b5a4e470b80ade93d67db7e570f047a7cd47c"' : 'data-target="#xs-pipes-links-module-MovementsUiFeatureModule-0f04417f96e4c3817e23abc45c62e4be66a0cede77e6ccdfa761eb4f0efa2da9971ea6fa3946a57073837117644b5a4e470b80ade93d67db7e570f047a7cd47c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-MovementsUiFeatureModule-0f04417f96e4c3817e23abc45c62e4be66a0cede77e6ccdfa761eb4f0efa2da9971ea6fa3946a57073837117644b5a4e470b80ade93d67db7e570f047a7cd47c"' :
                                            'id="xs-pipes-links-module-MovementsUiFeatureModule-0f04417f96e4c3817e23abc45c62e4be66a0cede77e6ccdfa761eb4f0efa2da9971ea6fa3946a57073837117644b5a4e470b80ade93d67db7e570f047a7cd47c"' }>
                                            <li class="link">
                                                <a href="pipes/CurrencyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SharedBreadcrumbsComponent.html" data-type="entity-link" >SharedBreadcrumbsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ValidationErrorsComponent.html" data-type="entity-link" >ValidationErrorsComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountsEffects.html" data-type="entity-link" >AccountsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationEffects.html" data-type="entity-link" >AuthenticationEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesEffects.html" data-type="entity-link" >CategoriesEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoreEffects.html" data-type="entity-link" >CoreEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonthlyAnalysisEffects.html" data-type="entity-link" >MonthlyAnalysisEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MovementsEffects.html" data-type="entity-link" >MovementsEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/XsrfInterceptor.html" data-type="entity-link" >XsrfInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountPublic.html" data-type="entity-link" >AccountPublic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountsEffectsInterface.html" data-type="entity-link" >AccountsEffectsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountsServiceInterface.html" data-type="entity-link" >AccountsServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountsState.html" data-type="entity-link" >AccountsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnalysisMonthly.html" data-type="entity-link" >AnalysisMonthly</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnalysisMonthlyForecastCategory.html" data-type="entity-link" >AnalysisMonthlyForecastCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnalysisServiceInterface.html" data-type="entity-link" >AnalysisServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnalysisState.html" data-type="entity-link" >AnalysisState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiMovement.html" data-type="entity-link" >ApiMovement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiMovements.html" data-type="entity-link" >ApiMovements</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiServiceInterface.html" data-type="entity-link" >ApiServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationData.html" data-type="entity-link" >AuthenticationData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationEffectsInterface.html" data-type="entity-link" >AuthenticationEffectsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationResponse.html" data-type="entity-link" >AuthenticationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationServiceInterface.html" data-type="entity-link" >AuthenticationServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoriesEffectsInterface.html" data-type="entity-link" >CategoriesEffectsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoriesServiceInterface.html" data-type="entity-link" >CategoriesServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoriesState.html" data-type="entity-link" >CategoriesState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryPublic.html" data-type="entity-link" >CategoryPublic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CoreEffectsInterface.html" data-type="entity-link" >CoreEffectsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CoreState.html" data-type="entity-link" >CoreState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatesServiceInterface.html" data-type="entity-link" >DatesServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MonthlyAnalysisEffectsInterface.html" data-type="entity-link" >MonthlyAnalysisEffectsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movement.html" data-type="entity-link" >Movement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovementFormData.html" data-type="entity-link" >MovementFormData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movements.html" data-type="entity-link" >Movements</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovementsEffectsInterface.html" data-type="entity-link" >MovementsEffectsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovementsServiceInterface.html" data-type="entity-link" >MovementsServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovementsState.html" data-type="entity-link" >MovementsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovementsTranformerInterface.html" data-type="entity-link" >MovementsTranformerInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenServiceInterface.html" data-type="entity-link" >TokenServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationError.html" data-type="entity-link" >ValidationError</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CurrencyPipe.html" data-type="entity-link" >CurrencyPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});