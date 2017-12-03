babel  ./src/index.js  --out-file ./dist/bundle.js



./node_modules/.bin/webpack
./node_modules/.bin/webpack src/index.js dist/bundle.js
./node_modules/.bin/webpack --config webpack.config.js
webpack ./src/app.js ./dist/app.bundle.js -p


"scripts": { "start": "httpster -d ./dist -p 3000"  },
"scripts": { "start": " ./node_modules/.bin/webpack-dev-server" },

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

?loadSpfx=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"71ddd22c-6fdb-40a5-a3da-07f5ce917f35":{"location":"ClientSideExtension.ListViewCommandSet.CommandBar","properties":{"sampleTextOne":"One item is selected in the list.","sampleTextTwo":"This command is always visible."}}}


$c = Get-Credential
Connect-SPOService -Url https://nnn-admin.sharepoint.com/  $c 
Get-SPOTenantCdnEnabled -CdnType Public
Get-SPOTenantCdnOrigins -CdnType Public
Get-SPOTenantCdnPolicies -CdnType Public

Set-SPOTenantCdnEnabled -CdnType Public
Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl */cdn

https://publiccdn.sharepointonline.com/<tenant host name>/sites/site/library/folder
"cdnBasePath": "https://publiccdn.sharepointonline.com/nnn.sharepoint.com/sites/dev/CDN/helloworld"

?reset=true
resets cache and cookies

this.context.pageContext



AZURE CDN

new storage account endpoint spfxsamples.blob.core.windows.net.
http://spfxsamples.azureedge.net/helloworld-webpart/
{
  "cdnBasePath": "https://spfxsamples.azureedge.net/helloworld-webpart/"
} 
The CDN base path is the CDN endpoint with the BLOB container.




