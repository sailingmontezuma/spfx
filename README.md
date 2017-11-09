
npm install -g @microsoft/generator-sharepoint
npm install -g @microsoft/generator-sharepoint@1.0.2
npm install -g source-map-explorer newman
npm install newman --global;
npm install --production   (downloads only dependencies modules)
npm i react
npm install @types/jquery@2.048 @types/angular@1.6.14 --save-dev

npm list -g --depth 0
npm list -g --depth=0
npm ls -g --depth=0

npm view @microsoft/generator-sharepoint
npm outdated -g
npm update -g
npm update -g jshint
npm run test
npm run clean
npm prune
npm link gulp
npm-shrinkwrap

gulp build
>>output goes to /lib folder
gulp trust-dev-cert
gulp serve
gulp serve --nobrowser
gulp clean
gulp bundle
gulp bundle --ship
>>output goes to /dist folder
>>creates manifest json file
>>creates /temp/deploy folder
>>multiple bundles can be created from the same sharepoint projects
gulp --tasks
gulp -T
gulp package-solution --ship
gulp deploy-azure-storage
>>run config based on content of write-manifest.json file
1. build 2. bundle

nvm ls available

git clean -f -d
git fetch && git checkout dev

/_layouts/15/workbench.aspx
/_layouts/workbench.aspx

web site feature to activate:
Site Pages
Allows users to add new site pages to a site

yo @microsoft/sharepoint
yo @microsoft/sharepoint --skip-install


dist folder execution context:
source-map-explorer hello-world.bundle.js hello-world.bundle.js.map


code .
explorer .


C:\apps\nuget.exe restore "C:\bb\RB.GLDS.DocConverter.Api.sln"
Update-Package -Id <package_name> –reinstall 
msbuild RB.GLDS.DocConverter.Api.sln

Install-Package Autofac.WebApi2 -Version 4.1.0 

newman run collections\TestCollection1.postman_collectionAzure.json -n 18

SharePoint Online Management Tool -  Powershell commands

write-manifest.json

application extensions:
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"dcd9de29-ac65-4fd6-93e6-debffba1cebc":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"testMessage":"Hello as property!"}}}


?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"151002e5-1c8f-4553-a91c-c57784b3cf38":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"Top":"top area of the page", "Bottom": "Bottom are of the page"}}}
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&fieldCustomizers={"Percent":{"id":"7b5f679d-3952-442d-8a07-ca7b5612bc1b","properties":{"sampleText":"Hello!!!"}}}

$c = Get-Credential
Connect-SPOService -Url https://nnn-admin.sharepoint.com/  $c 
Get-SPOTenantCdnEnabled -CdnType Public
Get-SPOTenantCdnOrigins -CdnType Public
Get-SPOTenantCdnPolicies -CdnType Public

Set-SPOTenantCdnEnabled -CdnType Public
Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl */cdn

https://publiccdn.sharepointonline.com/<tenant host name>/sites/site/library/folder
"cdnBasePath": "https://publiccdn.sharepointonline.com/nnn.sharepoint.com/sites/dev/CDN/helloworld"

           