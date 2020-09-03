# MerakiDashboardApi.OrganizationsorganizationIdbrandingPoliciesAdminSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliesTo** | **String** | Which kinds of admins this policy applies to. Can be one of &#x27;All organization admins&#x27;, &#x27;All enterprise admins&#x27;, &#x27;All network admins&#x27;, &#x27;All admins of networks...&#x27;, &#x27;All admins of networks tagged...&#x27;, &#x27;Specific admins...&#x27;, &#x27;All admins&#x27; or &#x27;All SAML admins&#x27;. | [optional] 
**values** | **[String]** |     If &#x27;appliesTo&#x27; is set to one of &#x27;Specific admins...&#x27;, &#x27;All admins of networks...&#x27; or &#x27;All admins of networks tagged...&#x27;, then you must specify this &#x27;values&#x27; property to provide the set of     entities to apply the branding policy to. For &#x27;Specific admins...&#x27;, specify an array of admin IDs. For &#x27;All admins of     networks...&#x27;, specify an array of network IDs and/or configuration template IDs. For &#x27;All admins of networks tagged...&#x27;,     specify an array of tag names.  | [optional] 

<a name="AppliesToEnum"></a>
## Enum: AppliesToEnum

* `All organization admins` (value: `"All organization admins"`)
* `All enterprise admins` (value: `"All enterprise admins"`)
* `All network admins` (value: `"All network admins"`)
* `All admins of networks...` (value: `"All admins of networks..."`)
* `All admins of networks tagged...` (value: `"All admins of networks tagged..."`)
* `Specific admins...` (value: `"Specific admins..."`)
* `All admins` (value: `"All admins"`)
* `All SAML admins` (value: `"All SAML admins"`)

