# MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesbrandingPolicyIdHelpSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**helpTab** | **String** |     The Help tab, under which all support information resides. If this tab is hidden, no other 'Help' branding     customizations will be visible. Can be one of 'default or inherit', 'hide' or 'show'.  | [optional] 
**getHelpSubtab** | **String** |     The 'Help -> Get Help' subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note     that if this subtab is hidden, branding customizations for the KB on 'Get help', Cisco Meraki product documentation,     and support contact info will not be visible. Can be one of 'default or inherit', 'hide' or 'show'.  | [optional] 
**communitySubtab** | **String** |     The 'Help -> Community' subtab which provides a link to Meraki Community. Can be one of 'default or inherit', 'hide' or 'show'.  | [optional] 
**casesSubtab** | **String** |     The 'Help -> Cases' Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one     of 'default or inherit', 'hide' or 'show'.  | [optional] 
**dataProtectionRequestsSubtab** | **String** |     The 'Help -> Data protection requests' Dashboard subtab on which requests to delete, restrict, or export end-user data can     be audited. Can be one of 'default or inherit', 'hide' or 'show'.  | [optional] 
**getHelpSubtabKnowledgeBaseSearch** | **String** |     The KB search box which appears on the Help page. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.  | [optional] 
**universalSearchKnowledgeBaseSearch** | **String** |     The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures     whether these Meraki KB results should be returned. Can be one of 'default or inherit', 'hide' or 'show'.  | [optional] 
**ciscoMerakiProductDocumentation** | **String** |     The 'Product Manuals' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.  | [optional] 
**supportContactInfo** | **String** |     The 'Contact Meraki Support' section of the 'Help -> Get Help' subtab. Can be one of 'default or inherit', 'hide', 'show', or a replacement custom HTML string.  | [optional] 
**newFeaturesSubtab** | **String** |     The 'Help -> New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'.  | [optional] 
**firewallInfoSubtab** | **String** |     The 'Help -> Firewall info' subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are     listed. Can be one of 'default or inherit', 'hide' or 'show'.  | [optional] 
**apiDocsSubtab** | **String** |     The 'Help -> API docs' subtab where a detailed description of the Dashboard API is listed. Can be one of     'default or inherit', 'hide' or 'show'.  | [optional] 
**hardwareReplacementsSubtab** | **String** |     The 'Help -> Replacement info' subtab where important information regarding device replacements is detailed. Can be one of     'default or inherit', 'hide' or 'show'.  | [optional] 
**smForums** | **String** |     The 'SM Forums' subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for     organizations that contain Systems Manager networks. Can be one of 'default or inherit', 'hide' or 'show'.  | [optional] 


<a name="HelpTabEnum"></a>
## Enum: HelpTabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="GetHelpSubtabEnum"></a>
## Enum: GetHelpSubtabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="CommunitySubtabEnum"></a>
## Enum: CommunitySubtabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="CasesSubtabEnum"></a>
## Enum: CasesSubtabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="DataProtectionRequestsSubtabEnum"></a>
## Enum: DataProtectionRequestsSubtabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="UniversalSearchKnowledgeBaseSearchEnum"></a>
## Enum: UniversalSearchKnowledgeBaseSearchEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="NewFeaturesSubtabEnum"></a>
## Enum: NewFeaturesSubtabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="FirewallInfoSubtabEnum"></a>
## Enum: FirewallInfoSubtabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="ApiDocsSubtabEnum"></a>
## Enum: ApiDocsSubtabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="HardwareReplacementsSubtabEnum"></a>
## Enum: HardwareReplacementsSubtabEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




<a name="SmForumsEnum"></a>
## Enum: SmForumsEnum


* `defaultOrInherit` (value: `"default or inherit"`)

* `hide` (value: `"hide"`)

* `show` (value: `"show"`)




