# MerakiDashboardApi.OrganizationsorganizationIdclaimLicenses

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | The key of the license | 
**mode** | **String** | Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. This parameter is legacy and only applies to coterm licensing; it should not be specified when claiming per-device licenses. Please see <a target='_blank' href='https://documentation.meraki.com/zGeneral_Administration/Licensing/Adding_an_Enterprise_license_to_an_existing_Dashboard_account'>this article</a> for more information. | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `addDevices` (value: `"addDevices"`)

* `renew` (value: `"renew"`)




