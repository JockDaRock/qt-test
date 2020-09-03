# MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesHelpSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**helpTab** | **String** |     The Help tab, under which all support information resides. If this tab is hidden, no other &#x27;Help&#x27; branding     customizations will be visible. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**getHelpSubtab** | **String** |     The &#x27;Help -&gt; Get Help&#x27; subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note     that if this subtab is hidden, branding customizations for the KB on &#x27;Get help&#x27;, Cisco Meraki product documentation,     and support contact info will not be visible. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**communitySubtab** | **String** |     The &#x27;Help -&gt; Community&#x27; subtab which provides a link to Meraki Community. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**casesSubtab** | **String** |     The &#x27;Help -&gt; Cases&#x27; Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one     of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**dataProtectionRequestsSubtab** | **String** |     The &#x27;Help -&gt; Data protection requests&#x27; Dashboard subtab on which requests to delete, restrict, or export end-user data can     be audited. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**getHelpSubtabKnowledgeBaseSearch** | **String** |     The KB search box which appears on the Help page. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27;, &#x27;show&#x27;, or a replacement custom HTML string.  | [optional] 
**universalSearchKnowledgeBaseSearch** | **String** |     The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures     whether these Meraki KB results should be returned. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**ciscoMerakiProductDocumentation** | **String** |     The &#x27;Product Manuals&#x27; section of the &#x27;Help -&gt; Get Help&#x27; subtab. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27;, &#x27;show&#x27;, or a replacement custom HTML string.  | [optional] 
**supportContactInfo** | **String** |     The &#x27;Contact Meraki Support&#x27; section of the &#x27;Help -&gt; Get Help&#x27; subtab. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27;, &#x27;show&#x27;, or a replacement custom HTML string.  | [optional] 
**newFeaturesSubtab** | **String** |     The &#x27;Help -&gt; New features&#x27; subtab where new Dashboard features are detailed. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**firewallInfoSubtab** | **String** |     The &#x27;Help -&gt; Firewall info&#x27; subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are     listed. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**apiDocsSubtab** | **String** |     The &#x27;Help -&gt; API docs&#x27; subtab where a detailed description of the Dashboard API is listed. Can be one of     &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**hardwareReplacementsSubtab** | **String** |     The &#x27;Help -&gt; Replacement info&#x27; subtab where important information regarding device replacements is detailed. Can be one of     &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 
**smForums** | **String** |     The &#x27;SM Forums&#x27; subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for     organizations that contain Systems Manager networks. Can be one of &#x27;default or inherit&#x27;, &#x27;hide&#x27; or &#x27;show&#x27;.  | [optional] 

<a name="HelpTabEnum"></a>
## Enum: HelpTabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="GetHelpSubtabEnum"></a>
## Enum: GetHelpSubtabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="CommunitySubtabEnum"></a>
## Enum: CommunitySubtabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="CasesSubtabEnum"></a>
## Enum: CasesSubtabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="DataProtectionRequestsSubtabEnum"></a>
## Enum: DataProtectionRequestsSubtabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="UniversalSearchKnowledgeBaseSearchEnum"></a>
## Enum: UniversalSearchKnowledgeBaseSearchEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="NewFeaturesSubtabEnum"></a>
## Enum: NewFeaturesSubtabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="FirewallInfoSubtabEnum"></a>
## Enum: FirewallInfoSubtabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="ApiDocsSubtabEnum"></a>
## Enum: ApiDocsSubtabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="HardwareReplacementsSubtabEnum"></a>
## Enum: HardwareReplacementsSubtabEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)


<a name="SmForumsEnum"></a>
## Enum: SmForumsEnum

* `default or inherit` (value: `"default or inherit"`)
* `hide` (value: `"hide"`)
* `show` (value: `"show"`)

