# MerakiDashboardApi.OrganizationsorganizationIdclaimLicenses

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | The key of the license | 
**mode** | **String** | Either &#x27;renew&#x27; or &#x27;addDevices&#x27;. &#x27;addDevices&#x27; will increase the license limit, while &#x27;renew&#x27; will extend the amount of time until expiration. This parameter is legacy and only applies to coterm licensing; it should not be specified when claiming per-device licenses. Please see &lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;https://documentation.meraki.com/zGeneral_Administration/Licensing/Adding_an_Enterprise_license_to_an_existing_Dashboard_account&#x27;&gt;this article&lt;/a&gt; for more information. | [optional] 

<a name="ModeEnum"></a>
## Enum: ModeEnum

* `addDevices` (value: `"addDevices"`)
* `renew` (value: `"renew"`)

