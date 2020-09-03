# MerakiDashboardApi.UpdateNetworkWirelessSsid

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the SSID | [optional] 
**enabled** | **Boolean** | Whether or not the SSID is enabled | [optional] 
**authMode** | **String** | The association control method for the SSID ('open', 'psk', 'open-with-radius', '8021x-meraki', '8021x-radius', 'ipsk-with-radius' or 'ipsk-without-radius') | [optional] 
**enterpriseAdminAccess** | **String** | Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled') | [optional] 
**encryptionMode** | **String** | The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk' | [optional] 
**psk** | **String** | The passkey for the SSID. This param is only valid if the authMode is 'psk' | [optional] 
**wpaEncryptionMode** | **String** | The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only') | [optional] 
**splashPage** | **String** | The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest' or 'Cisco ISE'). This attribute is not supported for template children. | [optional] 
**radiusServers** | [**[NetworksnetworkIdwirelessssidsnumberRadiusServers]**](NetworksnetworkIdwirelessssidsnumberRadiusServers.md) | The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' | [optional] 
**radiusProxyEnabled** | **Boolean** | If true, Meraki devices will proxy RADIUS messages through the Meraki cloud to the configured RADIUS auth and accounting servers. | [optional] 
**radiusCoaEnabled** | **Boolean** | If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server. | [optional] 
**radiusFailoverPolicy** | **String** | This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access') | [optional] 
**radiusLoadBalancingPolicy** | **String** | This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin') | [optional] 
**radiusAccountingEnabled** | **Boolean** | Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' | [optional] 
**radiusAccountingServers** | [**[NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers]**](NetworksnetworkIdwirelessssidsnumberRadiusAccountingServers.md) | The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true' | [optional] 
**radiusAttributeForGroupPolicies** | **String** | Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message | [optional] 
**ipAssignmentMode** | **String** | The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Layer 3 roaming with a concentrator' or 'VPN') | [optional] 
**useVlanTagging** | **Boolean** | Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming' | [optional] 
**concentratorNetworkId** | **String** | The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'. | [optional] 
**vlanId** | **Number** | The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN' | [optional] 
**defaultVlanId** | **Number** | The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming' | [optional] 
**apTagsAndVlanIds** | [**[NetworksnetworkIdwirelessssidsnumberApTagsAndVlanIds]**](NetworksnetworkIdwirelessssidsnumberApTagsAndVlanIds.md) | The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming' | [optional] 
**walledGardenEnabled** | **Boolean** | Allow access to a configurable list of IP ranges, which users may access prior to sign-on. | [optional] 
**walledGardenRanges** | **[String]** | Specify your walled garden by entering an array of addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. '192.168.1.1/24', '192.168.37.10/32', 'www.yahoo.com', '*.google.com']). Meraki's splash page is automatically included in your walled garden. | [optional] 
**radiusOverride** | **Boolean** | If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'. | [optional] 
**radiusGuestVlanEnabled** | **Boolean** | Whether or not RADIUS Guest VLAN is enabled. This param is only valid if the authMode is 'open-with-radius' and addressing mode is not set to 'isolated' or 'nat' mode | [optional] 
**radiusGuestVlanId** | **Number** | VLAN ID of the RADIUS Guest VLAN. This param is only valid if the authMode is 'open-with-radius' and addressing mode is not set to 'isolated' or 'nat' mode | [optional] 
**minBitrate** | **Number** | The minimum bitrate in Mbps. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54') | [optional] 
**bandSelection** | **String** | The client-serving radio frequencies. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering') | [optional] 
**perClientBandwidthLimitUp** | **Number** | The upload bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**perClientBandwidthLimitDown** | **Number** | The download bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**perSsidBandwidthLimitUp** | **Number** | The total upload bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**perSsidBandwidthLimitDown** | **Number** | The total download bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**lanIsolationEnabled** | **Boolean** | Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'. | [optional] 
**visible** | **Boolean** | Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true | [optional] 
**availableOnAllAps** | **Boolean** | Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags. | [optional] 
**availabilityTags** | **[String]** | Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list. | [optional] 
**mandatoryDhcpEnabled** | **Boolean** | If true, Mandatory DHCP will enforce that clients connecting to this SSID must use the IP address assigned by the DHCP server. Clients who use a static IP address won’t be able to associate. | [optional] 


<a name="AuthModeEnum"></a>
## Enum: AuthModeEnum


* `open` (value: `"open"`)

* `psk` (value: `"psk"`)

* `openWithRadius` (value: `"open-with-radius"`)

* `_8021xMeraki` (value: `"8021x-meraki"`)

* `_8021xRadius` (value: `"8021x-radius"`)

* `ipskWithRadius` (value: `"ipsk-with-radius"`)

* `ipskWithoutRadius` (value: `"ipsk-without-radius"`)




<a name="EnterpriseAdminAccessEnum"></a>
## Enum: EnterpriseAdminAccessEnum


* `disabled` (value: `"access disabled"`)

* `enabled` (value: `"access enabled"`)




<a name="EncryptionModeEnum"></a>
## Enum: EncryptionModeEnum


* `wep` (value: `"wep"`)

* `wpa` (value: `"wpa"`)




<a name="WpaEncryptionModeEnum"></a>
## Enum: WpaEncryptionModeEnum


* `wPA1Only` (value: `"WPA1 only"`)

* `wPA1AndWPA2` (value: `"WPA1 and WPA2"`)

* `wPA2Only` (value: `"WPA2 only"`)

* `wPA3TransitionMode` (value: `"WPA3 Transition Mode"`)

* `wPA3Only` (value: `"WPA3 only"`)




<a name="SplashPageEnum"></a>
## Enum: SplashPageEnum


* `none` (value: `"None"`)

* `clickThroughSplashPage` (value: `"Click-through splash page"`)

* `billing` (value: `"Billing"`)

* `passwordProtectedWithMerakiRADIUS` (value: `"Password-protected with Meraki RADIUS"`)

* `passwordProtectedWithCustomRADIUS` (value: `"Password-protected with custom RADIUS"`)

* `passwordProtectedWithActiveDirectory` (value: `"Password-protected with Active Directory"`)

* `passwordProtectedWithLDAP` (value: `"Password-protected with LDAP"`)

* `sMSAuthentication` (value: `"SMS authentication"`)

* `systemsManagerSentry` (value: `"Systems Manager Sentry"`)

* `facebookWiFi` (value: `"Facebook Wi-Fi"`)

* `googleOAuth` (value: `"Google OAuth"`)

* `sponsoredGuest` (value: `"Sponsored guest"`)

* `ciscoISE` (value: `"Cisco ISE"`)




<a name="RadiusFailoverPolicyEnum"></a>
## Enum: RadiusFailoverPolicyEnum


* `denyAccess` (value: `"Deny access"`)

* `allowAccess` (value: `"Allow access"`)




<a name="RadiusLoadBalancingPolicyEnum"></a>
## Enum: RadiusLoadBalancingPolicyEnum


* `strictPriorityOrder` (value: `"Strict priority order"`)

* `roundRobin` (value: `"Round robin"`)




<a name="RadiusAttributeForGroupPoliciesEnum"></a>
## Enum: RadiusAttributeForGroupPoliciesEnum


* `filterId` (value: `"Filter-Id"`)

* `replyMessage` (value: `"Reply-Message"`)

* `airespaceACLName` (value: `"Airespace-ACL-Name"`)

* `arubaUserRole` (value: `"Aruba-User-Role"`)




