# MerakiDashboardApi.ConfigureApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNetworkSwitchStack**](ConfigureApi.md#addNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/add | Add a switch to a stack
[**assignOrganizationLicensesSeats**](ConfigureApi.md#assignOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/assignSeats | Assign SM seats to a network. This will increase the managed SM device limit of the network
[**bindNetwork**](ConfigureApi.md#bindNetwork) | **POST** /networks/{networkId}/bind | Bind a network to a template.
[**claimIntoOrganization**](ConfigureApi.md#claimIntoOrganization) | **POST** /organizations/{organizationId}/claim | Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization&#x27;s inventory.
[**claimNetworkDevices**](ConfigureApi.md#claimNetworkDevices) | **POST** /networks/{networkId}/devices/claim | Claim devices into a network
[**cloneOrganization**](ConfigureApi.md#cloneOrganization) | **POST** /organizations/{organizationId}/clone | Create a new organization by cloning the addressed organization
[**combineOrganizationNetworks**](ConfigureApi.md#combineOrganizationNetworks) | **POST** /organizations/{organizationId}/networks/combine | Combine multiple networks into a single network
[**createDeviceSwitchRoutingInterface**](ConfigureApi.md#createDeviceSwitchRoutingInterface) | **POST** /devices/{serial}/switch/routing/interfaces | Create a layer 3 interface for a switch
[**createDeviceSwitchRoutingStaticRoute**](ConfigureApi.md#createDeviceSwitchRoutingStaticRoute) | **POST** /devices/{serial}/switch/routing/staticRoutes | Create a layer 3 static route for a switch
[**createNetworkApplianceStaticRoute**](ConfigureApi.md#createNetworkApplianceStaticRoute) | **POST** /networks/{networkId}/appliance/staticRoutes | Add a static route for an MX or teleworker network
[**createNetworkApplianceTrafficShapingCustomPerformanceClass**](ConfigureApi.md#createNetworkApplianceTrafficShapingCustomPerformanceClass) | **POST** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | Add a custom performance class for an MX network
[**createNetworkApplianceVlan**](ConfigureApi.md#createNetworkApplianceVlan) | **POST** /networks/{networkId}/appliance/vlans | Add a VLAN
[**createNetworkCameraQualityRetentionProfile**](ConfigureApi.md#createNetworkCameraQualityRetentionProfile) | **POST** /networks/{networkId}/camera/qualityRetentionProfiles | Creates new quality retention profile for this network.
[**createNetworkFloorPlan**](ConfigureApi.md#createNetworkFloorPlan) | **POST** /networks/{networkId}/floorPlans | Upload a floor plan
[**createNetworkGroupPolicy**](ConfigureApi.md#createNetworkGroupPolicy) | **POST** /networks/{networkId}/groupPolicies | Create a group policy
[**createNetworkMerakiAuthUser**](ConfigureApi.md#createNetworkMerakiAuthUser) | **POST** /networks/{networkId}/merakiAuthUsers | Create a user configured with Meraki Authentication for a network (currently only 802.1X RADIUS users can be created, and currently, organizations have a 50,000 user cap)
[**createNetworkMqttBroker**](ConfigureApi.md#createNetworkMqttBroker) | **POST** /networks/{networkId}/mqttBrokers | Add an MQTT broker
[**createNetworkPiiRequest**](ConfigureApi.md#createNetworkPiiRequest) | **POST** /networks/{networkId}/pii/requests | Submit a new delete or restrict processing PII request
[**createNetworkSmBypassActivationLockAttempt**](ConfigureApi.md#createNetworkSmBypassActivationLockAttempt) | **POST** /networks/{networkId}/sm/bypassActivationLockAttempts | Bypass activation lock attempt
[**createNetworkSmTargetGroup**](ConfigureApi.md#createNetworkSmTargetGroup) | **POST** /networks/{networkId}/sm/targetGroups | Add a target group
[**createNetworkSwitchLinkAggregation**](ConfigureApi.md#createNetworkSwitchLinkAggregation) | **POST** /networks/{networkId}/switch/linkAggregations | Create a link aggregation group
[**createNetworkSwitchPortSchedule**](ConfigureApi.md#createNetworkSwitchPortSchedule) | **POST** /networks/{networkId}/switch/portSchedules | Add a switch port schedule
[**createNetworkSwitchQosRule**](ConfigureApi.md#createNetworkSwitchQosRule) | **POST** /networks/{networkId}/switch/qosRules | Add a quality of service rule
[**createNetworkSwitchRoutingMulticastRendezvousPoint**](ConfigureApi.md#createNetworkSwitchRoutingMulticastRendezvousPoint) | **POST** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | Create a multicast rendezvous point
[**createNetworkSwitchStack**](ConfigureApi.md#createNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks | Create a stack
[**createNetworkSwitchStackRoutingInterface**](ConfigureApi.md#createNetworkSwitchStackRoutingInterface) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | Create a layer 3 interface for a switch stack
[**createNetworkSwitchStackRoutingStaticRoute**](ConfigureApi.md#createNetworkSwitchStackRoutingStaticRoute) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | Create a layer 3 static route for a switch stack
[**createNetworkWebhooksHttpServer**](ConfigureApi.md#createNetworkWebhooksHttpServer) | **POST** /networks/{networkId}/webhooks/httpServers | Add an HTTP server to a network
[**createNetworkWebhooksWebhookTest**](ConfigureApi.md#createNetworkWebhooksWebhookTest) | **POST** /networks/{networkId}/webhooks/webhookTests | Send a test webhook for a network
[**createNetworkWirelessRfProfile**](ConfigureApi.md#createNetworkWirelessRfProfile) | **POST** /networks/{networkId}/wireless/rfProfiles | Creates new RF profile for this network
[**createNetworkWirelessSsidIdentityPsk**](ConfigureApi.md#createNetworkWirelessSsidIdentityPsk) | **POST** /networks/{networkId}/wireless/ssids/{number}/identityPsks | Create an Identity PSK
[**createOrganization**](ConfigureApi.md#createOrganization) | **POST** /organizations | Create a new organization
[**createOrganizationActionBatch**](ConfigureApi.md#createOrganizationActionBatch) | **POST** /organizations/{organizationId}/actionBatches | Create an action batch
[**createOrganizationAdmin**](ConfigureApi.md#createOrganizationAdmin) | **POST** /organizations/{organizationId}/admins | Create a new dashboard administrator
[**createOrganizationBrandingPolicy**](ConfigureApi.md#createOrganizationBrandingPolicy) | **POST** /organizations/{organizationId}/brandingPolicies | Add a new branding policy to an organization
[**createOrganizationConfigTemplate**](ConfigureApi.md#createOrganizationConfigTemplate) | **POST** /organizations/{organizationId}/configTemplates | Create a new configuration template
[**createOrganizationInsightMonitoredMediaServer**](ConfigureApi.md#createOrganizationInsightMonitoredMediaServer) | **POST** /organizations/{organizationId}/insight/monitoredMediaServers | Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
[**createOrganizationNetwork**](ConfigureApi.md#createOrganizationNetwork) | **POST** /organizations/{organizationId}/networks | Create a network
[**createOrganizationSamlIdp**](ConfigureApi.md#createOrganizationSamlIdp) | **POST** /organizations/{organizationId}/saml/idps | Create a SAML IdP for your organization.
[**createOrganizationSamlRole**](ConfigureApi.md#createOrganizationSamlRole) | **POST** /organizations/{organizationId}/samlRoles | Create a SAML role
[**deleteDeviceSwitchRoutingInterface**](ConfigureApi.md#deleteDeviceSwitchRoutingInterface) | **DELETE** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Delete a layer 3 interface from the switch
[**deleteDeviceSwitchRoutingStaticRoute**](ConfigureApi.md#deleteDeviceSwitchRoutingStaticRoute) | **DELETE** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch
[**deleteNetwork**](ConfigureApi.md#deleteNetwork) | **DELETE** /networks/{networkId} | Delete a network
[**deleteNetworkApplianceStaticRoute**](ConfigureApi.md#deleteNetworkApplianceStaticRoute) | **DELETE** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Delete a static route from an MX or teleworker network
[**deleteNetworkApplianceTrafficShapingCustomPerformanceClass**](ConfigureApi.md#deleteNetworkApplianceTrafficShapingCustomPerformanceClass) | **DELETE** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Delete a custom performance class from an MX network
[**deleteNetworkApplianceVlan**](ConfigureApi.md#deleteNetworkApplianceVlan) | **DELETE** /networks/{networkId}/appliance/vlans/{vlanId} | Delete a VLAN from a network
[**deleteNetworkCameraQualityRetentionProfile**](ConfigureApi.md#deleteNetworkCameraQualityRetentionProfile) | **DELETE** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Delete an existing quality retention profile for this network.
[**deleteNetworkFloorPlan**](ConfigureApi.md#deleteNetworkFloorPlan) | **DELETE** /networks/{networkId}/floorPlans/{floorPlanId} | Destroy a floor plan
[**deleteNetworkGroupPolicy**](ConfigureApi.md#deleteNetworkGroupPolicy) | **DELETE** /networks/{networkId}/groupPolicies/{groupPolicyId} | Delete a group policy
[**deleteNetworkMerakiAuthUser**](ConfigureApi.md#deleteNetworkMerakiAuthUser) | **DELETE** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)
[**deleteNetworkMqttBroker**](ConfigureApi.md#deleteNetworkMqttBroker) | **DELETE** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Delete an MQTT broker
[**deleteNetworkPiiRequest**](ConfigureApi.md#deleteNetworkPiiRequest) | **DELETE** /networks/{networkId}/pii/requests/{requestId} | Delete a restrict processing PII request
[**deleteNetworkSmTargetGroup**](ConfigureApi.md#deleteNetworkSmTargetGroup) | **DELETE** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Delete a target group from a network
[**deleteNetworkSwitchLinkAggregation**](ConfigureApi.md#deleteNetworkSwitchLinkAggregation) | **DELETE** /networks/{networkId}/switch/linkAggregations/{linkAggregationId} | Split a link aggregation group into separate ports
[**deleteNetworkSwitchPortSchedule**](ConfigureApi.md#deleteNetworkSwitchPortSchedule) | **DELETE** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Delete a switch port schedule
[**deleteNetworkSwitchQosRule**](ConfigureApi.md#deleteNetworkSwitchQosRule) | **DELETE** /networks/{networkId}/switch/qosRules/{qosRuleId} | Delete a quality of service rule
[**deleteNetworkSwitchRoutingMulticastRendezvousPoint**](ConfigureApi.md#deleteNetworkSwitchRoutingMulticastRendezvousPoint) | **DELETE** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Delete a multicast rendezvous point
[**deleteNetworkSwitchStack**](ConfigureApi.md#deleteNetworkSwitchStack) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId} | Delete a stack
[**deleteNetworkSwitchStackRoutingInterface**](ConfigureApi.md#deleteNetworkSwitchStackRoutingInterface) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Delete a layer 3 interface from a switch stack
[**deleteNetworkSwitchStackRoutingStaticRoute**](ConfigureApi.md#deleteNetworkSwitchStackRoutingStaticRoute) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch stack
[**deleteNetworkWebhooksHttpServer**](ConfigureApi.md#deleteNetworkWebhooksHttpServer) | **DELETE** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Delete an HTTP server from a network
[**deleteNetworkWirelessRfProfile**](ConfigureApi.md#deleteNetworkWirelessRfProfile) | **DELETE** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Delete a RF Profile
[**deleteNetworkWirelessSsidIdentityPsk**](ConfigureApi.md#deleteNetworkWirelessSsidIdentityPsk) | **DELETE** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Delete an Identity PSK
[**deleteOrganization**](ConfigureApi.md#deleteOrganization) | **DELETE** /organizations/{organizationId} | Delete an organization
[**deleteOrganizationActionBatch**](ConfigureApi.md#deleteOrganizationActionBatch) | **DELETE** /organizations/{organizationId}/actionBatches/{actionBatchId} | Delete an action batch
[**deleteOrganizationAdmin**](ConfigureApi.md#deleteOrganizationAdmin) | **DELETE** /organizations/{organizationId}/admins/{adminId} | Revoke all access for a dashboard administrator within this organization
[**deleteOrganizationBrandingPolicy**](ConfigureApi.md#deleteOrganizationBrandingPolicy) | **DELETE** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Delete a branding policy
[**deleteOrganizationConfigTemplate**](ConfigureApi.md#deleteOrganizationConfigTemplate) | **DELETE** /organizations/{organizationId}/configTemplates/{configTemplateId} | Remove a configuration template
[**deleteOrganizationInsightMonitoredMediaServer**](ConfigureApi.md#deleteOrganizationInsightMonitoredMediaServer) | **DELETE** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
[**deleteOrganizationSamlIdp**](ConfigureApi.md#deleteOrganizationSamlIdp) | **DELETE** /organizations/{organizationId}/saml/idps/{idpId} | Remove a SAML IdP in your organization.
[**deleteOrganizationSamlRole**](ConfigureApi.md#deleteOrganizationSamlRole) | **DELETE** /organizations/{organizationId}/samlRoles/{samlRoleId} | Remove a SAML role
[**getDevice**](ConfigureApi.md#getDevice) | **GET** /devices/{serial} | Return a single device
[**getDeviceCameraQualityAndRetention**](ConfigureApi.md#getDeviceCameraQualityAndRetention) | **GET** /devices/{serial}/camera/qualityAndRetention | Returns quality and retention settings for the given camera
[**getDeviceCameraSense**](ConfigureApi.md#getDeviceCameraSense) | **GET** /devices/{serial}/camera/sense | Returns sense settings for a given camera
[**getDeviceCameraSenseObjectDetectionModels**](ConfigureApi.md#getDeviceCameraSenseObjectDetectionModels) | **GET** /devices/{serial}/camera/sense/objectDetectionModels | Returns the MV Sense object detection model list for the given camera
[**getDeviceCameraVideoLink**](ConfigureApi.md#getDeviceCameraVideoLink) | **GET** /devices/{serial}/camera/videoLink | Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
[**getDeviceCameraVideoSettings**](ConfigureApi.md#getDeviceCameraVideoSettings) | **GET** /devices/{serial}/camera/video/settings | Returns video settings for the given camera
[**getDeviceCellularGatewayLan**](ConfigureApi.md#getDeviceCellularGatewayLan) | **GET** /devices/{serial}/cellularGateway/lan | Show the LAN Settings of a MG
[**getDeviceCellularGatewayPortForwardingRules**](ConfigureApi.md#getDeviceCellularGatewayPortForwardingRules) | **GET** /devices/{serial}/cellularGateway/portForwardingRules | Returns the port forwarding rules for a single MG.
[**getDeviceManagementInterface**](ConfigureApi.md#getDeviceManagementInterface) | **GET** /devices/{serial}/managementInterface | Return the management interface settings for a device
[**getDeviceSwitchPort**](ConfigureApi.md#getDeviceSwitchPort) | **GET** /devices/{serial}/switch/ports/{portId} | Return a switch port
[**getDeviceSwitchPorts**](ConfigureApi.md#getDeviceSwitchPorts) | **GET** /devices/{serial}/switch/ports | List the switch ports for a switch
[**getDeviceSwitchRoutingInterface**](ConfigureApi.md#getDeviceSwitchRoutingInterface) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Return a layer 3 interface for a switch
[**getDeviceSwitchRoutingInterfaceDhcp**](ConfigureApi.md#getDeviceSwitchRoutingInterfaceDhcp) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch
[**getDeviceSwitchRoutingInterfaces**](ConfigureApi.md#getDeviceSwitchRoutingInterfaces) | **GET** /devices/{serial}/switch/routing/interfaces | List layer 3 interfaces for a switch
[**getDeviceSwitchRoutingStaticRoute**](ConfigureApi.md#getDeviceSwitchRoutingStaticRoute) | **GET** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch
[**getDeviceSwitchRoutingStaticRoutes**](ConfigureApi.md#getDeviceSwitchRoutingStaticRoutes) | **GET** /devices/{serial}/switch/routing/staticRoutes | List layer 3 static routes for a switch
[**getDeviceSwitchWarmSpare**](ConfigureApi.md#getDeviceSwitchWarmSpare) | **GET** /devices/{serial}/switch/warmSpare | Return warm spare configuration for a switch
[**getDeviceWirelessBluetoothSettings**](ConfigureApi.md#getDeviceWirelessBluetoothSettings) | **GET** /devices/{serial}/wireless/bluetooth/settings | Return the bluetooth settings for a wireless device
[**getDeviceWirelessRadioSettings**](ConfigureApi.md#getDeviceWirelessRadioSettings) | **GET** /devices/{serial}/wireless/radio/settings | Return the radio settings of a device
[**getNetwork**](ConfigureApi.md#getNetwork) | **GET** /networks/{networkId} | Return a network
[**getNetworkAlertsSettings**](ConfigureApi.md#getNetworkAlertsSettings) | **GET** /networks/{networkId}/alerts/settings | Return the alert configuration for this network
[**getNetworkApplianceConnectivityMonitoringDestinations**](ConfigureApi.md#getNetworkApplianceConnectivityMonitoringDestinations) | **GET** /networks/{networkId}/appliance/connectivityMonitoringDestinations | Return the connectivity testing destinations for an MX network
[**getNetworkApplianceContentFiltering**](ConfigureApi.md#getNetworkApplianceContentFiltering) | **GET** /networks/{networkId}/appliance/contentFiltering | Return the content filtering settings for an MX network
[**getNetworkApplianceContentFilteringCategories**](ConfigureApi.md#getNetworkApplianceContentFilteringCategories) | **GET** /networks/{networkId}/appliance/contentFiltering/categories | List all available content filtering categories for an MX network
[**getNetworkApplianceFirewallCellularFirewallRules**](ConfigureApi.md#getNetworkApplianceFirewallCellularFirewallRules) | **GET** /networks/{networkId}/appliance/firewall/cellularFirewallRules | Return the cellular firewall rules for an MX network
[**getNetworkApplianceFirewallFirewalledService**](ConfigureApi.md#getNetworkApplianceFirewallFirewalledService) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Return the accessibility settings of the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)
[**getNetworkApplianceFirewallFirewalledServices**](ConfigureApi.md#getNetworkApplianceFirewallFirewalledServices) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices | List the appliance services and their accessibility rules
[**getNetworkApplianceFirewallInboundFirewallRules**](ConfigureApi.md#getNetworkApplianceFirewallInboundFirewallRules) | **GET** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Return the inbound firewall rules for an MX network
[**getNetworkApplianceFirewallL3FirewallRules**](ConfigureApi.md#getNetworkApplianceFirewallL3FirewallRules) | **GET** /networks/{networkId}/appliance/firewall/l3FirewallRules | Return the L3 firewall rules for an MX network
[**getNetworkApplianceFirewallL7FirewallRules**](ConfigureApi.md#getNetworkApplianceFirewallL7FirewallRules) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules | List the MX L7 firewall rules for an MX network
[**getNetworkApplianceFirewallL7FirewallRulesApplicationCategories**](ConfigureApi.md#getNetworkApplianceFirewallL7FirewallRulesApplicationCategories) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories | Return the L7 firewall application categories and their associated applications for an MX network
[**getNetworkApplianceFirewallOneToManyNatRules**](ConfigureApi.md#getNetworkApplianceFirewallOneToManyNatRules) | **GET** /networks/{networkId}/appliance/firewall/oneToManyNatRules | Return the 1:Many NAT mapping rules for an MX network
[**getNetworkApplianceFirewallOneToOneNatRules**](ConfigureApi.md#getNetworkApplianceFirewallOneToOneNatRules) | **GET** /networks/{networkId}/appliance/firewall/oneToOneNatRules | Return the 1:1 NAT mapping rules for an MX network
[**getNetworkApplianceFirewallPortForwardingRules**](ConfigureApi.md#getNetworkApplianceFirewallPortForwardingRules) | **GET** /networks/{networkId}/appliance/firewall/portForwardingRules | Return the port forwarding rules for an MX network
[**getNetworkAppliancePort**](ConfigureApi.md#getNetworkAppliancePort) | **GET** /networks/{networkId}/appliance/ports/{portId} | Return per-port VLAN settings for a single MX port.
[**getNetworkAppliancePorts**](ConfigureApi.md#getNetworkAppliancePorts) | **GET** /networks/{networkId}/appliance/ports | List per-port VLAN settings for all ports of a MX.
[**getNetworkApplianceSecurityIntrusion**](ConfigureApi.md#getNetworkApplianceSecurityIntrusion) | **GET** /networks/{networkId}/appliance/security/intrusion | Returns all supported intrusion settings for an MX network
[**getNetworkApplianceSecurityMalware**](ConfigureApi.md#getNetworkApplianceSecurityMalware) | **GET** /networks/{networkId}/appliance/security/malware | Returns all supported malware settings for an MX network
[**getNetworkApplianceSingleLan**](ConfigureApi.md#getNetworkApplianceSingleLan) | **GET** /networks/{networkId}/appliance/singleLan | Return single LAN configuration
[**getNetworkApplianceStaticRoute**](ConfigureApi.md#getNetworkApplianceStaticRoute) | **GET** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Return a static route for an MX or teleworker network
[**getNetworkApplianceStaticRoutes**](ConfigureApi.md#getNetworkApplianceStaticRoutes) | **GET** /networks/{networkId}/appliance/staticRoutes | List the static routes for an MX or teleworker network
[**getNetworkApplianceTrafficShapingCustomPerformanceClass**](ConfigureApi.md#getNetworkApplianceTrafficShapingCustomPerformanceClass) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Return a custom performance class for an MX network
[**getNetworkApplianceTrafficShapingCustomPerformanceClasses**](ConfigureApi.md#getNetworkApplianceTrafficShapingCustomPerformanceClasses) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | List all custom performance classes for an MX network
[**getNetworkApplianceTrafficShapingRules**](ConfigureApi.md#getNetworkApplianceTrafficShapingRules) | **GET** /networks/{networkId}/appliance/trafficShaping/rules | Display the traffic shaping settings for an MX network
[**getNetworkApplianceTrafficShapingUplinkBandwidth**](ConfigureApi.md#getNetworkApplianceTrafficShapingUplinkBandwidth) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Returns the uplink bandwidth settings for your MX network.
[**getNetworkApplianceTrafficShapingUplinkSelection**](ConfigureApi.md#getNetworkApplianceTrafficShapingUplinkSelection) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkSelection | Show uplink selection settings for an MX network
[**getNetworkApplianceVlan**](ConfigureApi.md#getNetworkApplianceVlan) | **GET** /networks/{networkId}/appliance/vlans/{vlanId} | Return a VLAN
[**getNetworkApplianceVlans**](ConfigureApi.md#getNetworkApplianceVlans) | **GET** /networks/{networkId}/appliance/vlans | List the VLANs for an MX network
[**getNetworkApplianceVlansSettings**](ConfigureApi.md#getNetworkApplianceVlansSettings) | **GET** /networks/{networkId}/appliance/vlans/settings | Returns the enabled status of VLANs for the network
[**getNetworkApplianceVpnSiteToSiteVpn**](ConfigureApi.md#getNetworkApplianceVpnSiteToSiteVpn) | **GET** /networks/{networkId}/appliance/vpn/siteToSiteVpn | Return the site-to-site VPN settings of a network. Only valid for MX networks.
[**getNetworkApplianceWarmSpare**](ConfigureApi.md#getNetworkApplianceWarmSpare) | **GET** /networks/{networkId}/appliance/warmSpare | Return MX warm spare settings
[**getNetworkCameraQualityRetentionProfile**](ConfigureApi.md#getNetworkCameraQualityRetentionProfile) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Retrieve a single quality retention profile
[**getNetworkCameraQualityRetentionProfiles**](ConfigureApi.md#getNetworkCameraQualityRetentionProfiles) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles | List the quality retention profiles for this network
[**getNetworkCameraSchedules**](ConfigureApi.md#getNetworkCameraSchedules) | **GET** /networks/{networkId}/camera/schedules | Returns a list of all camera recording schedules.
[**getNetworkCellularGatewayConnectivityMonitoringDestinations**](ConfigureApi.md#getNetworkCellularGatewayConnectivityMonitoringDestinations) | **GET** /networks/{networkId}/cellularGateway/connectivityMonitoringDestinations | Return the connectivity testing destinations for an MG network
[**getNetworkCellularGatewayDhcp**](ConfigureApi.md#getNetworkCellularGatewayDhcp) | **GET** /networks/{networkId}/cellularGateway/dhcp | List common DHCP settings of MGs
[**getNetworkCellularGatewaySubnetPool**](ConfigureApi.md#getNetworkCellularGatewaySubnetPool) | **GET** /networks/{networkId}/cellularGateway/subnetPool | Return the subnet pool and mask configured for MGs in the network.
[**getNetworkCellularGatewayUplink**](ConfigureApi.md#getNetworkCellularGatewayUplink) | **GET** /networks/{networkId}/cellularGateway/uplink | Returns the uplink settings for your MG network.
[**getNetworkClientPolicy**](ConfigureApi.md#getNetworkClientPolicy) | **GET** /networks/{networkId}/clients/{clientId}/policy | Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkClientSplashAuthorizationStatus**](ConfigureApi.md#getNetworkClientSplashAuthorizationStatus) | **GET** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**getNetworkDevices**](ConfigureApi.md#getNetworkDevices) | **GET** /networks/{networkId}/devices | List the devices in a network
[**getNetworkFirmwareUpgrades**](ConfigureApi.md#getNetworkFirmwareUpgrades) | **GET** /networks/{networkId}/firmwareUpgrades | Get current maintenance window for a network
[**getNetworkFloorPlan**](ConfigureApi.md#getNetworkFloorPlan) | **GET** /networks/{networkId}/floorPlans/{floorPlanId} | Find a floor plan by ID
[**getNetworkFloorPlans**](ConfigureApi.md#getNetworkFloorPlans) | **GET** /networks/{networkId}/floorPlans | List the floor plans that belong to your network
[**getNetworkGroupPolicies**](ConfigureApi.md#getNetworkGroupPolicies) | **GET** /networks/{networkId}/groupPolicies | List the group policies in a network
[**getNetworkGroupPolicy**](ConfigureApi.md#getNetworkGroupPolicy) | **GET** /networks/{networkId}/groupPolicies/{groupPolicyId} | Display a group policy
[**getNetworkMerakiAuthUser**](ConfigureApi.md#getNetworkMerakiAuthUser) | **GET** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Return the Meraki Auth splash or RADIUS user
[**getNetworkMerakiAuthUsers**](ConfigureApi.md#getNetworkMerakiAuthUsers) | **GET** /networks/{networkId}/merakiAuthUsers | List the splash or RADIUS users configured under Meraki Authentication for a network
[**getNetworkMqttBroker**](ConfigureApi.md#getNetworkMqttBroker) | **GET** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Return an MQTT broker
[**getNetworkMqttBrokers**](ConfigureApi.md#getNetworkMqttBrokers) | **GET** /networks/{networkId}/mqttBrokers | List the MQTT brokers for this network
[**getNetworkNetflow**](ConfigureApi.md#getNetworkNetflow) | **GET** /networks/{networkId}/netflow | Return the NetFlow traffic reporting settings for a network
[**getNetworkNetworkHealthChannelUtilization**](ConfigureApi.md#getNetworkNetworkHealthChannelUtilization) | **GET** /networks/{networkId}/networkHealth/channelUtilization | Get the channel utilization over each radio for all APs in a network.
[**getNetworkPiiPiiKeys**](ConfigureApi.md#getNetworkPiiPiiKeys) | **GET** /networks/{networkId}/pii/piiKeys | List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \&quot;0\&quot; containing the applicable keys.
[**getNetworkPiiRequest**](ConfigureApi.md#getNetworkPiiRequest) | **GET** /networks/{networkId}/pii/requests/{requestId} | Return a PII request
[**getNetworkPiiRequests**](ConfigureApi.md#getNetworkPiiRequests) | **GET** /networks/{networkId}/pii/requests | List the PII requests for this network or organization
[**getNetworkPiiSmDevicesForKey**](ConfigureApi.md#getNetworkPiiSmDevicesForKey) | **GET** /networks/{networkId}/pii/smDevicesForKey | Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
[**getNetworkPiiSmOwnersForKey**](ConfigureApi.md#getNetworkPiiSmOwnersForKey) | **GET** /networks/{networkId}/pii/smOwnersForKey | Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
[**getNetworkSettings**](ConfigureApi.md#getNetworkSettings) | **GET** /networks/{networkId}/settings | Return the settings for a network
[**getNetworkSmBypassActivationLockAttempt**](ConfigureApi.md#getNetworkSmBypassActivationLockAttempt) | **GET** /networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId} | Bypass activation lock attempt status
[**getNetworkSmDeviceCerts**](ConfigureApi.md#getNetworkSmDeviceCerts) | **GET** /networks/{networkId}/sm/devices/{deviceId}/certs | List the certs on a device
[**getNetworkSmDeviceDeviceProfiles**](ConfigureApi.md#getNetworkSmDeviceDeviceProfiles) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceProfiles | Get the profiles associated with a device
[**getNetworkSmDeviceNetworkAdapters**](ConfigureApi.md#getNetworkSmDeviceNetworkAdapters) | **GET** /networks/{networkId}/sm/devices/{deviceId}/networkAdapters | List the network adapters of a device
[**getNetworkSmDeviceRestrictions**](ConfigureApi.md#getNetworkSmDeviceRestrictions) | **GET** /networks/{networkId}/sm/devices/{deviceId}/restrictions | List the restrictions on a device
[**getNetworkSmDeviceSecurityCenters**](ConfigureApi.md#getNetworkSmDeviceSecurityCenters) | **GET** /networks/{networkId}/sm/devices/{deviceId}/securityCenters | List the security centers on a device
[**getNetworkSmDeviceSoftwares**](ConfigureApi.md#getNetworkSmDeviceSoftwares) | **GET** /networks/{networkId}/sm/devices/{deviceId}/softwares | Get a list of softwares associated with a device
[**getNetworkSmDeviceWlanLists**](ConfigureApi.md#getNetworkSmDeviceWlanLists) | **GET** /networks/{networkId}/sm/devices/{deviceId}/wlanLists | List the saved SSID names on a device
[**getNetworkSmProfiles**](ConfigureApi.md#getNetworkSmProfiles) | **GET** /networks/{networkId}/sm/profiles | List all profiles in a network
[**getNetworkSmTargetGroup**](ConfigureApi.md#getNetworkSmTargetGroup) | **GET** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Return a target group
[**getNetworkSmTargetGroups**](ConfigureApi.md#getNetworkSmTargetGroups) | **GET** /networks/{networkId}/sm/targetGroups | List the target groups in this network
[**getNetworkSmUserDeviceProfiles**](ConfigureApi.md#getNetworkSmUserDeviceProfiles) | **GET** /networks/{networkId}/sm/users/{userId}/deviceProfiles | Get the profiles associated with a user
[**getNetworkSmUserSoftwares**](ConfigureApi.md#getNetworkSmUserSoftwares) | **GET** /networks/{networkId}/sm/users/{userId}/softwares | Get a list of softwares associated with a user
[**getNetworkSnmp**](ConfigureApi.md#getNetworkSnmp) | **GET** /networks/{networkId}/snmp | Return the SNMP settings for a network
[**getNetworkSwitchAccessControlLists**](ConfigureApi.md#getNetworkSwitchAccessControlLists) | **GET** /networks/{networkId}/switch/accessControlLists | Return the access control lists for a MS network
[**getNetworkSwitchDhcpServerPolicy**](ConfigureApi.md#getNetworkSwitchDhcpServerPolicy) | **GET** /networks/{networkId}/switch/dhcpServerPolicy | Return the DHCP server policy
[**getNetworkSwitchDscpToCosMappings**](ConfigureApi.md#getNetworkSwitchDscpToCosMappings) | **GET** /networks/{networkId}/switch/dscpToCosMappings | Return the DSCP to CoS mappings
[**getNetworkSwitchLinkAggregations**](ConfigureApi.md#getNetworkSwitchLinkAggregations) | **GET** /networks/{networkId}/switch/linkAggregations | List link aggregation groups
[**getNetworkSwitchMtu**](ConfigureApi.md#getNetworkSwitchMtu) | **GET** /networks/{networkId}/switch/mtu | Return the MTU configuration
[**getNetworkSwitchPortSchedules**](ConfigureApi.md#getNetworkSwitchPortSchedules) | **GET** /networks/{networkId}/switch/portSchedules | List switch port schedules
[**getNetworkSwitchQosRule**](ConfigureApi.md#getNetworkSwitchQosRule) | **GET** /networks/{networkId}/switch/qosRules/{qosRuleId} | Return a quality of service rule
[**getNetworkSwitchQosRules**](ConfigureApi.md#getNetworkSwitchQosRules) | **GET** /networks/{networkId}/switch/qosRules | List quality of service rules
[**getNetworkSwitchQosRulesOrder**](ConfigureApi.md#getNetworkSwitchQosRulesOrder) | **GET** /networks/{networkId}/switch/qosRules/order | Return the quality of service rule IDs by order in which they will be processed by the switch
[**getNetworkSwitchRoutingMulticast**](ConfigureApi.md#getNetworkSwitchRoutingMulticast) | **GET** /networks/{networkId}/switch/routing/multicast | Return multicast settings for a network
[**getNetworkSwitchRoutingMulticastRendezvousPoint**](ConfigureApi.md#getNetworkSwitchRoutingMulticastRendezvousPoint) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Return a multicast rendezvous point
[**getNetworkSwitchRoutingMulticastRendezvousPoints**](ConfigureApi.md#getNetworkSwitchRoutingMulticastRendezvousPoints) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | List multicast rendezvous points
[**getNetworkSwitchRoutingOspf**](ConfigureApi.md#getNetworkSwitchRoutingOspf) | **GET** /networks/{networkId}/switch/routing/ospf | Return layer 3 OSPF routing configuration
[**getNetworkSwitchSettings**](ConfigureApi.md#getNetworkSwitchSettings) | **GET** /networks/{networkId}/switch/settings | Returns the switch network settings
[**getNetworkSwitchStack**](ConfigureApi.md#getNetworkSwitchStack) | **GET** /networks/{networkId}/switch/stacks/{switchStackId} | Show a switch stack
[**getNetworkSwitchStackRoutingInterface**](ConfigureApi.md#getNetworkSwitchStackRoutingInterface) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Return a layer 3 interface from a switch stack
[**getNetworkSwitchStackRoutingInterfaceDhcp**](ConfigureApi.md#getNetworkSwitchStackRoutingInterfaceDhcp) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**getNetworkSwitchStackRoutingInterfaces**](ConfigureApi.md#getNetworkSwitchStackRoutingInterfaces) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | List layer 3 interfaces for a switch stack
[**getNetworkSwitchStackRoutingStaticRoute**](ConfigureApi.md#getNetworkSwitchStackRoutingStaticRoute) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch stack
[**getNetworkSwitchStackRoutingStaticRoutes**](ConfigureApi.md#getNetworkSwitchStackRoutingStaticRoutes) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | List layer 3 static routes for a switch stack
[**getNetworkSwitchStacks**](ConfigureApi.md#getNetworkSwitchStacks) | **GET** /networks/{networkId}/switch/stacks | List the switch stacks in a network
[**getNetworkSwitchStormControl**](ConfigureApi.md#getNetworkSwitchStormControl) | **GET** /networks/{networkId}/switch/stormControl | Return the storm control configuration for a switch network
[**getNetworkSwitchStp**](ConfigureApi.md#getNetworkSwitchStp) | **GET** /networks/{networkId}/switch/stp | Returns STP settings
[**getNetworkSyslogServers**](ConfigureApi.md#getNetworkSyslogServers) | **GET** /networks/{networkId}/syslogServers | List the syslog servers for a network
[**getNetworkTrafficAnalysis**](ConfigureApi.md#getNetworkTrafficAnalysis) | **GET** /networks/{networkId}/trafficAnalysis | Return the traffic analysis settings for a network
[**getNetworkTrafficShapingApplicationCategories**](ConfigureApi.md#getNetworkTrafficShapingApplicationCategories) | **GET** /networks/{networkId}/trafficShaping/applicationCategories | Returns the application categories for traffic shaping rules.
[**getNetworkTrafficShapingDscpTaggingOptions**](ConfigureApi.md#getNetworkTrafficShapingDscpTaggingOptions) | **GET** /networks/{networkId}/trafficShaping/dscpTaggingOptions | Returns the available DSCP tagging options for your traffic shaping rules.
[**getNetworkWebhooksHttpServer**](ConfigureApi.md#getNetworkWebhooksHttpServer) | **GET** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Return an HTTP server for a network
[**getNetworkWebhooksHttpServers**](ConfigureApi.md#getNetworkWebhooksHttpServers) | **GET** /networks/{networkId}/webhooks/httpServers | List the HTTP servers for a network
[**getNetworkWebhooksWebhookTest**](ConfigureApi.md#getNetworkWebhooksWebhookTest) | **GET** /networks/{networkId}/webhooks/webhookTests/{webhookTestId} | Return the status of a webhook test for a network
[**getNetworkWirelessAlternateManagementInterface**](ConfigureApi.md#getNetworkWirelessAlternateManagementInterface) | **GET** /networks/{networkId}/wireless/alternateManagementInterface | Return alternate management interface and devices with IP assigned
[**getNetworkWirelessBluetoothSettings**](ConfigureApi.md#getNetworkWirelessBluetoothSettings) | **GET** /networks/{networkId}/wireless/bluetooth/settings | Return the Bluetooth settings for a network. &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt; must be enabled on the network.
[**getNetworkWirelessRfProfile**](ConfigureApi.md#getNetworkWirelessRfProfile) | **GET** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Return a RF profile
[**getNetworkWirelessRfProfiles**](ConfigureApi.md#getNetworkWirelessRfProfiles) | **GET** /networks/{networkId}/wireless/rfProfiles | List the non-basic RF profiles for this network
[**getNetworkWirelessSettings**](ConfigureApi.md#getNetworkWirelessSettings) | **GET** /networks/{networkId}/wireless/settings | Return the wireless settings for a network
[**getNetworkWirelessSsid**](ConfigureApi.md#getNetworkWirelessSsid) | **GET** /networks/{networkId}/wireless/ssids/{number} | Return a single MR SSID
[**getNetworkWirelessSsidFirewallL3FirewallRules**](ConfigureApi.md#getNetworkWirelessSsidFirewallL3FirewallRules) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Return the L3 firewall rules for an SSID on an MR network
[**getNetworkWirelessSsidFirewallL7FirewallRules**](ConfigureApi.md#getNetworkWirelessSsidFirewallL7FirewallRules) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Return the L7 firewall rules for an SSID on an MR network
[**getNetworkWirelessSsidIdentityPsk**](ConfigureApi.md#getNetworkWirelessSsidIdentityPsk) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Return an Identity PSK
[**getNetworkWirelessSsidIdentityPsks**](ConfigureApi.md#getNetworkWirelessSsidIdentityPsks) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks | List all Identity PSKs in a wireless network
[**getNetworkWirelessSsidSplashSettings**](ConfigureApi.md#getNetworkWirelessSsidSplashSettings) | **GET** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Display the splash page settings for the given SSID
[**getNetworkWirelessSsidTrafficShapingRules**](ConfigureApi.md#getNetworkWirelessSsidTrafficShapingRules) | **GET** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Display the traffic shaping settings for a SSID on an MR network
[**getNetworkWirelessSsids**](ConfigureApi.md#getNetworkWirelessSsids) | **GET** /networks/{networkId}/wireless/ssids | List the MR SSIDs in a network
[**getOrganization**](ConfigureApi.md#getOrganization) | **GET** /organizations/{organizationId} | Return an organization
[**getOrganizationActionBatch**](ConfigureApi.md#getOrganizationActionBatch) | **GET** /organizations/{organizationId}/actionBatches/{actionBatchId} | Return an action batch
[**getOrganizationActionBatches**](ConfigureApi.md#getOrganizationActionBatches) | **GET** /organizations/{organizationId}/actionBatches | Return the list of action batches in the organization
[**getOrganizationAdmins**](ConfigureApi.md#getOrganizationAdmins) | **GET** /organizations/{organizationId}/admins | List the dashboard administrators in this organization
[**getOrganizationApplianceSecurityIntrusion**](ConfigureApi.md#getOrganizationApplianceSecurityIntrusion) | **GET** /organizations/{organizationId}/appliance/security/intrusion | Returns all supported intrusion settings for an organization
[**getOrganizationApplianceVpnThirdPartyVPNPeers**](ConfigureApi.md#getOrganizationApplianceVpnThirdPartyVPNPeers) | **GET** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Return the third party VPN peers for an organization
[**getOrganizationApplianceVpnVpnFirewallRules**](ConfigureApi.md#getOrganizationApplianceVpnVpnFirewallRules) | **GET** /organizations/{organizationId}/appliance/vpn/vpnFirewallRules | Return the firewall rules for an organization&#x27;s site-to-site VPN
[**getOrganizationBrandingPolicies**](ConfigureApi.md#getOrganizationBrandingPolicies) | **GET** /organizations/{organizationId}/brandingPolicies | List the branding policies of an organization
[**getOrganizationBrandingPoliciesPriorities**](ConfigureApi.md#getOrganizationBrandingPoliciesPriorities) | **GET** /organizations/{organizationId}/brandingPolicies/priorities | Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
[**getOrganizationBrandingPolicy**](ConfigureApi.md#getOrganizationBrandingPolicy) | **GET** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Return a branding policy
[**getOrganizationConfigTemplate**](ConfigureApi.md#getOrganizationConfigTemplate) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId} | Return a single configuration template
[**getOrganizationConfigTemplateSwitchProfilePort**](ConfigureApi.md#getOrganizationConfigTemplateSwitchProfilePort) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Return a switch profile port
[**getOrganizationConfigTemplateSwitchProfilePorts**](ConfigureApi.md#getOrganizationConfigTemplateSwitchProfilePorts) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports | Return all the ports of a switch profile
[**getOrganizationConfigTemplateSwitchProfiles**](ConfigureApi.md#getOrganizationConfigTemplateSwitchProfiles) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles | List the switch profiles for your switch template configuration
[**getOrganizationConfigTemplates**](ConfigureApi.md#getOrganizationConfigTemplates) | **GET** /organizations/{organizationId}/configTemplates | List the configuration templates for this organization
[**getOrganizationDevices**](ConfigureApi.md#getOrganizationDevices) | **GET** /organizations/{organizationId}/devices | List the devices in an organization
[**getOrganizationInsightMonitoredMediaServer**](ConfigureApi.md#getOrganizationInsightMonitoredMediaServer) | **GET** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
[**getOrganizationInsightMonitoredMediaServers**](ConfigureApi.md#getOrganizationInsightMonitoredMediaServers) | **GET** /organizations/{organizationId}/insight/monitoredMediaServers | List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
[**getOrganizationInventoryDevices**](ConfigureApi.md#getOrganizationInventoryDevices) | **GET** /organizations/{organizationId}/inventoryDevices | Return the device inventory for an organization
[**getOrganizationLicense**](ConfigureApi.md#getOrganizationLicense) | **GET** /organizations/{organizationId}/licenses/{licenseId} | Display a license
[**getOrganizationLicenses**](ConfigureApi.md#getOrganizationLicenses) | **GET** /organizations/{organizationId}/licenses | List the licenses for an organization
[**getOrganizationNetworks**](ConfigureApi.md#getOrganizationNetworks) | **GET** /organizations/{organizationId}/networks | List the networks that the user has privileges on in an organization
[**getOrganizationSaml**](ConfigureApi.md#getOrganizationSaml) | **GET** /organizations/{organizationId}/saml | Returns the SAML SSO enabled settings for an organization.
[**getOrganizationSamlIdp**](ConfigureApi.md#getOrganizationSamlIdp) | **GET** /organizations/{organizationId}/saml/idps/{idpId} | Get a SAML IdP from your organization.
[**getOrganizationSamlIdps**](ConfigureApi.md#getOrganizationSamlIdps) | **GET** /organizations/{organizationId}/saml/idps | List the SAML IdPs in your organization.
[**getOrganizationSamlRole**](ConfigureApi.md#getOrganizationSamlRole) | **GET** /organizations/{organizationId}/samlRoles/{samlRoleId} | Return a SAML role
[**getOrganizationSamlRoles**](ConfigureApi.md#getOrganizationSamlRoles) | **GET** /organizations/{organizationId}/samlRoles | List the SAML roles for this organization
[**getOrganizationSmApnsCert**](ConfigureApi.md#getOrganizationSmApnsCert) | **GET** /organizations/{organizationId}/sm/apnsCert | Get the organization&#x27;s APNS certificate
[**getOrganizationSmVppAccount**](ConfigureApi.md#getOrganizationSmVppAccount) | **GET** /organizations/{organizationId}/sm/vppAccounts/{vppAccountId} | Get a hash containing the unparsed token of the VPP account with the given ID
[**getOrganizationSmVppAccounts**](ConfigureApi.md#getOrganizationSmVppAccounts) | **GET** /organizations/{organizationId}/sm/vppAccounts | List the VPP accounts in the organization
[**getOrganizationSnmp**](ConfigureApi.md#getOrganizationSnmp) | **GET** /organizations/{organizationId}/snmp | Return the SNMP settings for an organization
[**getOrganizations**](ConfigureApi.md#getOrganizations) | **GET** /organizations | List the organizations that the user has privileges on
[**moveOrganizationLicenses**](ConfigureApi.md#moveOrganizationLicenses) | **POST** /organizations/{organizationId}/licenses/move | Move licenses to another organization. This will also move any devices that the licenses are assigned to
[**moveOrganizationLicensesSeats**](ConfigureApi.md#moveOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/moveSeats | Move SM seats to another organization
[**provisionNetworkClients**](ConfigureApi.md#provisionNetworkClients) | **POST** /networks/{networkId}/clients/provision | Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
[**refreshNetworkSmDeviceDetails**](ConfigureApi.md#refreshNetworkSmDeviceDetails) | **POST** /networks/{networkId}/sm/devices/{deviceId}/refreshDetails | Refresh the details of a device
[**removeNetworkDevices**](ConfigureApi.md#removeNetworkDevices) | **POST** /networks/{networkId}/devices/remove | Remove a single device
[**removeNetworkSwitchStack**](ConfigureApi.md#removeNetworkSwitchStack) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/remove | Remove a switch from a stack
[**renewOrganizationLicensesSeats**](ConfigureApi.md#renewOrganizationLicensesSeats) | **POST** /organizations/{organizationId}/licenses/renewSeats | Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
[**splitNetwork**](ConfigureApi.md#splitNetwork) | **POST** /networks/{networkId}/split | Split a combined network into individual networks for each type of device
[**swapNetworkApplianceWarmSpare**](ConfigureApi.md#swapNetworkApplianceWarmSpare) | **POST** /networks/{networkId}/appliance/warmSpare/swap | Swap MX primary and warm spare appliances
[**unbindNetwork**](ConfigureApi.md#unbindNetwork) | **POST** /networks/{networkId}/unbind | Unbind a network from a template.
[**unenrollNetworkSmDevice**](ConfigureApi.md#unenrollNetworkSmDevice) | **POST** /networks/{networkId}/sm/devices/{deviceId}/unenroll | Unenroll a device
[**updateDevice**](ConfigureApi.md#updateDevice) | **PUT** /devices/{serial} | Update the attributes of a device
[**updateDeviceCameraQualityAndRetention**](ConfigureApi.md#updateDeviceCameraQualityAndRetention) | **PUT** /devices/{serial}/camera/qualityAndRetention | Update quality and retention settings for the given camera
[**updateDeviceCameraSense**](ConfigureApi.md#updateDeviceCameraSense) | **PUT** /devices/{serial}/camera/sense | Update sense settings for the given camera
[**updateDeviceCameraVideoSettings**](ConfigureApi.md#updateDeviceCameraVideoSettings) | **PUT** /devices/{serial}/camera/video/settings | Update video settings for the given camera
[**updateDeviceCellularGatewayLan**](ConfigureApi.md#updateDeviceCellularGatewayLan) | **PUT** /devices/{serial}/cellularGateway/lan | Update the LAN Settings for a single MG.
[**updateDeviceCellularGatewayPortForwardingRules**](ConfigureApi.md#updateDeviceCellularGatewayPortForwardingRules) | **PUT** /devices/{serial}/cellularGateway/portForwardingRules | Updates the port forwarding rules for a single MG.
[**updateDeviceManagementInterface**](ConfigureApi.md#updateDeviceManagementInterface) | **PUT** /devices/{serial}/managementInterface | Update the management interface settings for a device
[**updateDeviceSwitchPort**](ConfigureApi.md#updateDeviceSwitchPort) | **PUT** /devices/{serial}/switch/ports/{portId} | Update a switch port
[**updateDeviceSwitchRoutingInterface**](ConfigureApi.md#updateDeviceSwitchRoutingInterface) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch
[**updateDeviceSwitchRoutingInterfaceDhcp**](ConfigureApi.md#updateDeviceSwitchRoutingInterfaceDhcp) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch
[**updateDeviceSwitchRoutingStaticRoute**](ConfigureApi.md#updateDeviceSwitchRoutingStaticRoute) | **PUT** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch
[**updateDeviceSwitchWarmSpare**](ConfigureApi.md#updateDeviceSwitchWarmSpare) | **PUT** /devices/{serial}/switch/warmSpare | Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
[**updateDeviceWirelessBluetoothSettings**](ConfigureApi.md#updateDeviceWirelessBluetoothSettings) | **PUT** /devices/{serial}/wireless/bluetooth/settings | Update the bluetooth settings for a wireless device
[**updateDeviceWirelessRadioSettings**](ConfigureApi.md#updateDeviceWirelessRadioSettings) | **PUT** /devices/{serial}/wireless/radio/settings | Update the radio settings of a device
[**updateNetwork**](ConfigureApi.md#updateNetwork) | **PUT** /networks/{networkId} | Update a network
[**updateNetworkAlertsSettings**](ConfigureApi.md#updateNetworkAlertsSettings) | **PUT** /networks/{networkId}/alerts/settings | Update the alert configuration for this network
[**updateNetworkApplianceConnectivityMonitoringDestinations**](ConfigureApi.md#updateNetworkApplianceConnectivityMonitoringDestinations) | **PUT** /networks/{networkId}/appliance/connectivityMonitoringDestinations | Update the connectivity testing destinations for an MX network
[**updateNetworkApplianceContentFiltering**](ConfigureApi.md#updateNetworkApplianceContentFiltering) | **PUT** /networks/{networkId}/appliance/contentFiltering | Update the content filtering settings for an MX network
[**updateNetworkApplianceFirewallCellularFirewallRules**](ConfigureApi.md#updateNetworkApplianceFirewallCellularFirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/cellularFirewallRules | Update the cellular firewall rules of an MX network
[**updateNetworkApplianceFirewallFirewalledService**](ConfigureApi.md#updateNetworkApplianceFirewallFirewalledService) | **PUT** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Updates the accessibility settings for the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)
[**updateNetworkApplianceFirewallInboundFirewallRules**](ConfigureApi.md#updateNetworkApplianceFirewallInboundFirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Update the inbound firewall rules of an MX network
[**updateNetworkApplianceFirewallL3FirewallRules**](ConfigureApi.md#updateNetworkApplianceFirewallL3FirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/l3FirewallRules | Update the L3 firewall rules of an MX network
[**updateNetworkApplianceFirewallL7FirewallRules**](ConfigureApi.md#updateNetworkApplianceFirewallL7FirewallRules) | **PUT** /networks/{networkId}/appliance/firewall/l7FirewallRules | Update the MX L7 firewall rules for an MX network
[**updateNetworkApplianceFirewallOneToManyNatRules**](ConfigureApi.md#updateNetworkApplianceFirewallOneToManyNatRules) | **PUT** /networks/{networkId}/appliance/firewall/oneToManyNatRules | Set the 1:Many NAT mapping rules for an MX network
[**updateNetworkApplianceFirewallOneToOneNatRules**](ConfigureApi.md#updateNetworkApplianceFirewallOneToOneNatRules) | **PUT** /networks/{networkId}/appliance/firewall/oneToOneNatRules | Set the 1:1 NAT mapping rules for an MX network
[**updateNetworkApplianceFirewallPortForwardingRules**](ConfigureApi.md#updateNetworkApplianceFirewallPortForwardingRules) | **PUT** /networks/{networkId}/appliance/firewall/portForwardingRules | Update the port forwarding rules for an MX network
[**updateNetworkAppliancePort**](ConfigureApi.md#updateNetworkAppliancePort) | **PUT** /networks/{networkId}/appliance/ports/{portId} | Update the per-port VLAN settings for a single MX port.
[**updateNetworkApplianceSecurityIntrusion**](ConfigureApi.md#updateNetworkApplianceSecurityIntrusion) | **PUT** /networks/{networkId}/appliance/security/intrusion | Set the supported intrusion settings for an MX network
[**updateNetworkApplianceSecurityMalware**](ConfigureApi.md#updateNetworkApplianceSecurityMalware) | **PUT** /networks/{networkId}/appliance/security/malware | Set the supported malware settings for an MX network
[**updateNetworkApplianceSingleLan**](ConfigureApi.md#updateNetworkApplianceSingleLan) | **PUT** /networks/{networkId}/appliance/singleLan | Update single LAN configuration
[**updateNetworkApplianceStaticRoute**](ConfigureApi.md#updateNetworkApplianceStaticRoute) | **PUT** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Update a static route for an MX or teleworker network
[**updateNetworkApplianceTrafficShapingCustomPerformanceClass**](ConfigureApi.md#updateNetworkApplianceTrafficShapingCustomPerformanceClass) | **PUT** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Update a custom performance class for an MX network
[**updateNetworkApplianceTrafficShapingRules**](ConfigureApi.md#updateNetworkApplianceTrafficShapingRules) | **PUT** /networks/{networkId}/appliance/trafficShaping/rules | Update the traffic shaping settings for an MX network
[**updateNetworkApplianceTrafficShapingUplinkBandwidth**](ConfigureApi.md#updateNetworkApplianceTrafficShapingUplinkBandwidth) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Updates the uplink bandwidth settings for your MX network.
[**updateNetworkApplianceTrafficShapingUplinkSelection**](ConfigureApi.md#updateNetworkApplianceTrafficShapingUplinkSelection) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkSelection | Update uplink selection settings for an MX network
[**updateNetworkApplianceVlan**](ConfigureApi.md#updateNetworkApplianceVlan) | **PUT** /networks/{networkId}/appliance/vlans/{vlanId} | Update a VLAN
[**updateNetworkApplianceVlansSettings**](ConfigureApi.md#updateNetworkApplianceVlansSettings) | **PUT** /networks/{networkId}/appliance/vlans/settings | Enable/Disable VLANs for the given network
[**updateNetworkApplianceVpnSiteToSiteVpn**](ConfigureApi.md#updateNetworkApplianceVpnSiteToSiteVpn) | **PUT** /networks/{networkId}/appliance/vpn/siteToSiteVpn | Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
[**updateNetworkApplianceWarmSpare**](ConfigureApi.md#updateNetworkApplianceWarmSpare) | **PUT** /networks/{networkId}/appliance/warmSpare | Update MX warm spare settings
[**updateNetworkCameraQualityRetentionProfile**](ConfigureApi.md#updateNetworkCameraQualityRetentionProfile) | **PUT** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Update an existing quality retention profile for this network.
[**updateNetworkCellularGatewayConnectivityMonitoringDestinations**](ConfigureApi.md#updateNetworkCellularGatewayConnectivityMonitoringDestinations) | **PUT** /networks/{networkId}/cellularGateway/connectivityMonitoringDestinations | Update the connectivity testing destinations for an MG network
[**updateNetworkCellularGatewayDhcp**](ConfigureApi.md#updateNetworkCellularGatewayDhcp) | **PUT** /networks/{networkId}/cellularGateway/dhcp | Update common DHCP settings of MGs
[**updateNetworkCellularGatewaySubnetPool**](ConfigureApi.md#updateNetworkCellularGatewaySubnetPool) | **PUT** /networks/{networkId}/cellularGateway/subnetPool | Update the subnet pool and mask configuration for MGs in the network.
[**updateNetworkCellularGatewayUplink**](ConfigureApi.md#updateNetworkCellularGatewayUplink) | **PUT** /networks/{networkId}/cellularGateway/uplink | Updates the uplink settings for your MG network.
[**updateNetworkClientPolicy**](ConfigureApi.md#updateNetworkClientPolicy) | **PUT** /networks/{networkId}/clients/{clientId}/policy | Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**updateNetworkClientSplashAuthorizationStatus**](ConfigureApi.md#updateNetworkClientSplashAuthorizationStatus) | **PUT** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**updateNetworkFirmwareUpgrades**](ConfigureApi.md#updateNetworkFirmwareUpgrades) | **PUT** /networks/{networkId}/firmwareUpgrades | Update current maintenance window for a network
[**updateNetworkFloorPlan**](ConfigureApi.md#updateNetworkFloorPlan) | **PUT** /networks/{networkId}/floorPlans/{floorPlanId} | Update a floor plan&#x27;s geolocation and other meta data
[**updateNetworkGroupPolicy**](ConfigureApi.md#updateNetworkGroupPolicy) | **PUT** /networks/{networkId}/groupPolicies/{groupPolicyId} | Update a group policy
[**updateNetworkMerakiAuthUser**](ConfigureApi.md#updateNetworkMerakiAuthUser) | **PUT** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)
[**updateNetworkMqttBroker**](ConfigureApi.md#updateNetworkMqttBroker) | **PUT** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Update an MQTT broker
[**updateNetworkNetflow**](ConfigureApi.md#updateNetworkNetflow) | **PUT** /networks/{networkId}/netflow | Update the NetFlow traffic reporting settings for a network
[**updateNetworkSettings**](ConfigureApi.md#updateNetworkSettings) | **PUT** /networks/{networkId}/settings | Update the settings for a network
[**updateNetworkSmDevicesFields**](ConfigureApi.md#updateNetworkSmDevicesFields) | **PUT** /networks/{networkId}/sm/devices/fields | Modify the fields of a device
[**updateNetworkSmTargetGroup**](ConfigureApi.md#updateNetworkSmTargetGroup) | **PUT** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Update a target group
[**updateNetworkSnmp**](ConfigureApi.md#updateNetworkSnmp) | **PUT** /networks/{networkId}/snmp | Update the SNMP settings for a network
[**updateNetworkSwitchAccessControlLists**](ConfigureApi.md#updateNetworkSwitchAccessControlLists) | **PUT** /networks/{networkId}/switch/accessControlLists | Update the access control lists for a MS network
[**updateNetworkSwitchDhcpServerPolicy**](ConfigureApi.md#updateNetworkSwitchDhcpServerPolicy) | **PUT** /networks/{networkId}/switch/dhcpServerPolicy | Update the DHCP server policy
[**updateNetworkSwitchDscpToCosMappings**](ConfigureApi.md#updateNetworkSwitchDscpToCosMappings) | **PUT** /networks/{networkId}/switch/dscpToCosMappings | Update the DSCP to CoS mappings
[**updateNetworkSwitchLinkAggregation**](ConfigureApi.md#updateNetworkSwitchLinkAggregation) | **PUT** /networks/{networkId}/switch/linkAggregations/{linkAggregationId} | Update a link aggregation group
[**updateNetworkSwitchMtu**](ConfigureApi.md#updateNetworkSwitchMtu) | **PUT** /networks/{networkId}/switch/mtu | Update the MTU configuration
[**updateNetworkSwitchPortSchedule**](ConfigureApi.md#updateNetworkSwitchPortSchedule) | **PUT** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Update a switch port schedule
[**updateNetworkSwitchQosRule**](ConfigureApi.md#updateNetworkSwitchQosRule) | **PUT** /networks/{networkId}/switch/qosRules/{qosRuleId} | Update a quality of service rule
[**updateNetworkSwitchQosRulesOrder**](ConfigureApi.md#updateNetworkSwitchQosRulesOrder) | **PUT** /networks/{networkId}/switch/qosRules/order | Update the order in which the rules should be processed by the switch
[**updateNetworkSwitchRoutingMulticast**](ConfigureApi.md#updateNetworkSwitchRoutingMulticast) | **PUT** /networks/{networkId}/switch/routing/multicast | Update multicast settings for a network
[**updateNetworkSwitchRoutingMulticastRendezvousPoint**](ConfigureApi.md#updateNetworkSwitchRoutingMulticastRendezvousPoint) | **PUT** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Update a multicast rendezvous point
[**updateNetworkSwitchRoutingOspf**](ConfigureApi.md#updateNetworkSwitchRoutingOspf) | **PUT** /networks/{networkId}/switch/routing/ospf | Update layer 3 OSPF routing configuration
[**updateNetworkSwitchSettings**](ConfigureApi.md#updateNetworkSwitchSettings) | **PUT** /networks/{networkId}/switch/settings | Update switch network settings
[**updateNetworkSwitchStackRoutingInterface**](ConfigureApi.md#updateNetworkSwitchStackRoutingInterface) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch stack
[**updateNetworkSwitchStackRoutingInterfaceDhcp**](ConfigureApi.md#updateNetworkSwitchStackRoutingInterfaceDhcp) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack
[**updateNetworkSwitchStackRoutingStaticRoute**](ConfigureApi.md#updateNetworkSwitchStackRoutingStaticRoute) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch stack
[**updateNetworkSwitchStormControl**](ConfigureApi.md#updateNetworkSwitchStormControl) | **PUT** /networks/{networkId}/switch/stormControl | Update the storm control configuration for a switch network
[**updateNetworkSwitchStp**](ConfigureApi.md#updateNetworkSwitchStp) | **PUT** /networks/{networkId}/switch/stp | Updates STP settings
[**updateNetworkSyslogServers**](ConfigureApi.md#updateNetworkSyslogServers) | **PUT** /networks/{networkId}/syslogServers | Update the syslog servers for a network
[**updateNetworkTrafficAnalysis**](ConfigureApi.md#updateNetworkTrafficAnalysis) | **PUT** /networks/{networkId}/trafficAnalysis | Update the traffic analysis settings for a network
[**updateNetworkWebhooksHttpServer**](ConfigureApi.md#updateNetworkWebhooksHttpServer) | **PUT** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Update an HTTP server
[**updateNetworkWirelessAlternateManagementInterface**](ConfigureApi.md#updateNetworkWirelessAlternateManagementInterface) | **PUT** /networks/{networkId}/wireless/alternateManagementInterface | Update alternate management interface and device static IP
[**updateNetworkWirelessBluetoothSettings**](ConfigureApi.md#updateNetworkWirelessBluetoothSettings) | **PUT** /networks/{networkId}/wireless/bluetooth/settings | Update the Bluetooth settings for a network. See the docs page for &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt;.
[**updateNetworkWirelessRfProfile**](ConfigureApi.md#updateNetworkWirelessRfProfile) | **PUT** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Updates specified RF profile for this network
[**updateNetworkWirelessSettings**](ConfigureApi.md#updateNetworkWirelessSettings) | **PUT** /networks/{networkId}/wireless/settings | Update the wireless settings for a network
[**updateNetworkWirelessSsid**](ConfigureApi.md#updateNetworkWirelessSsid) | **PUT** /networks/{networkId}/wireless/ssids/{number} | Update the attributes of an MR SSID
[**updateNetworkWirelessSsidFirewallL3FirewallRules**](ConfigureApi.md#updateNetworkWirelessSsidFirewallL3FirewallRules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Update the L3 firewall rules of an SSID on an MR network
[**updateNetworkWirelessSsidFirewallL7FirewallRules**](ConfigureApi.md#updateNetworkWirelessSsidFirewallL7FirewallRules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Update the L7 firewall rules of an SSID on an MR network
[**updateNetworkWirelessSsidIdentityPsk**](ConfigureApi.md#updateNetworkWirelessSsidIdentityPsk) | **PUT** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Update an Identity PSK
[**updateNetworkWirelessSsidSplashSettings**](ConfigureApi.md#updateNetworkWirelessSsidSplashSettings) | **PUT** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Modify the splash page settings for the given SSID
[**updateNetworkWirelessSsidTrafficShapingRules**](ConfigureApi.md#updateNetworkWirelessSsidTrafficShapingRules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Update the traffic shaping settings for an SSID on an MR network
[**updateOrganization**](ConfigureApi.md#updateOrganization) | **PUT** /organizations/{organizationId} | Update an organization
[**updateOrganizationActionBatch**](ConfigureApi.md#updateOrganizationActionBatch) | **PUT** /organizations/{organizationId}/actionBatches/{actionBatchId} | Update an action batch
[**updateOrganizationAdmin**](ConfigureApi.md#updateOrganizationAdmin) | **PUT** /organizations/{organizationId}/admins/{adminId} | Update an administrator
[**updateOrganizationApplianceSecurityIntrusion**](ConfigureApi.md#updateOrganizationApplianceSecurityIntrusion) | **PUT** /organizations/{organizationId}/appliance/security/intrusion | Sets supported intrusion settings for an organization
[**updateOrganizationApplianceVpnThirdPartyVPNPeers**](ConfigureApi.md#updateOrganizationApplianceVpnThirdPartyVPNPeers) | **PUT** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Update the third party VPN peers for an organization
[**updateOrganizationApplianceVpnVpnFirewallRules**](ConfigureApi.md#updateOrganizationApplianceVpnVpnFirewallRules) | **PUT** /organizations/{organizationId}/appliance/vpn/vpnFirewallRules | Update the firewall rules of an organization&#x27;s site-to-site VPN
[**updateOrganizationBrandingPoliciesPriorities**](ConfigureApi.md#updateOrganizationBrandingPoliciesPriorities) | **PUT** /organizations/{organizationId}/brandingPolicies/priorities | Update the priority ordering of an organization&#x27;s branding policies.
[**updateOrganizationBrandingPolicy**](ConfigureApi.md#updateOrganizationBrandingPolicy) | **PUT** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Update a branding policy
[**updateOrganizationConfigTemplate**](ConfigureApi.md#updateOrganizationConfigTemplate) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId} | Update a configuration template
[**updateOrganizationConfigTemplateSwitchProfilePort**](ConfigureApi.md#updateOrganizationConfigTemplateSwitchProfilePort) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Update a switch profile port
[**updateOrganizationInsightMonitoredMediaServer**](ConfigureApi.md#updateOrganizationInsightMonitoredMediaServer) | **PUT** /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId} | Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
[**updateOrganizationLicense**](ConfigureApi.md#updateOrganizationLicense) | **PUT** /organizations/{organizationId}/licenses/{licenseId} | Update a license
[**updateOrganizationSaml**](ConfigureApi.md#updateOrganizationSaml) | **PUT** /organizations/{organizationId}/saml | Updates the SAML SSO enabled settings for an organization.
[**updateOrganizationSamlIdp**](ConfigureApi.md#updateOrganizationSamlIdp) | **PUT** /organizations/{organizationId}/saml/idps/{idpId} | Update a SAML IdP in your organization
[**updateOrganizationSamlRole**](ConfigureApi.md#updateOrganizationSamlRole) | **PUT** /organizations/{organizationId}/samlRoles/{samlRoleId} | Update a SAML role
[**updateOrganizationSnmp**](ConfigureApi.md#updateOrganizationSnmp) | **PUT** /organizations/{organizationId}/snmp | Update the SNMP settings for an organization
[**wipeNetworkSmDevices**](ConfigureApi.md#wipeNetworkSmDevices) | **POST** /networks/{networkId}/sm/devices/wipe | Wipe a device

<a name="addNetworkSwitchStack"></a>
# **addNetworkSwitchStack**
> Object addNetworkSwitchStack(bodynetworkIdswitchStackId)

Add a switch to a stack

Add a switch to a stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body94(); // Body94 | 
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 

apiInstance.addNetworkSwitchStack(bodynetworkIdswitchStackId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body94**](Body94.md)|  | 
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="assignOrganizationLicensesSeats"></a>
# **assignOrganizationLicensesSeats**
> Object assignOrganizationLicensesSeats(bodyorganizationId)

Assign SM seats to a network. This will increase the managed SM device limit of the network

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body139(); // Body139 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.assignOrganizationLicensesSeats(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body139**](Body139.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bindNetwork"></a>
# **bindNetwork**
> Object bindNetwork(bodynetworkId)

Bind a network to a template.

Bind a network to a template.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body47(); // Body47 | 
let networkId = "networkId_example"; // String | 

apiInstance.bindNetwork(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body47**](Body47.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="claimIntoOrganization"></a>
# **claimIntoOrganization**
> Object claimIntoOrganization(organizationId, opts)

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization&#x27;s inventory.

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization&#x27;s inventory.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body132() // Body132 | 
};
apiInstance.claimIntoOrganization(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **body** | [**Body132**](Body132.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="claimNetworkDevices"></a>
# **claimNetworkDevices**
> claimNetworkDevices(bodynetworkId)

Claim devices into a network

Claim devices into a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body57(); // Body57 | 
let networkId = "networkId_example"; // String | 

apiInstance.claimNetworkDevices(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body57**](Body57.md)|  | 
 **networkId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="cloneOrganization"></a>
# **cloneOrganization**
> Object cloneOrganization(bodyorganizationId)

Create a new organization by cloning the addressed organization

Create a new organization by cloning the addressed organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body133(); // Body133 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.cloneOrganization(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body133**](Body133.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combineOrganizationNetworks"></a>
# **combineOrganizationNetworks**
> Object combineOrganizationNetworks(bodyorganizationId)

Combine multiple networks into a single network

Combine multiple networks into a single network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body145(); // Body145 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.combineOrganizationNetworks(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body145**](Body145.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDeviceSwitchRoutingInterface"></a>
# **createDeviceSwitchRoutingInterface**
> Object createDeviceSwitchRoutingInterface(bodyserial)

Create a layer 3 interface for a switch

Create a layer 3 interface for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body11(); // Body11 | 
let serial = "serial_example"; // String | 

apiInstance.createDeviceSwitchRoutingInterface(bodyserial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body11**](Body11.md)|  | 
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDeviceSwitchRoutingStaticRoute"></a>
# **createDeviceSwitchRoutingStaticRoute**
> Object createDeviceSwitchRoutingStaticRoute(bodyserial)

Create a layer 3 static route for a switch

Create a layer 3 static route for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body14(); // Body14 | 
let serial = "serial_example"; // String | 

apiInstance.createDeviceSwitchRoutingStaticRoute(bodyserial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body14**](Body14.md)|  | 
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkApplianceStaticRoute"></a>
# **createNetworkApplianceStaticRoute**
> Object createNetworkApplianceStaticRoute(bodynetworkId)

Add a static route for an MX or teleworker network

Add a static route for an MX or teleworker network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body35(); // Body35 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkApplianceStaticRoute(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body35**](Body35.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkApplianceTrafficShapingCustomPerformanceClass"></a>
# **createNetworkApplianceTrafficShapingCustomPerformanceClass**
> Object createNetworkApplianceTrafficShapingCustomPerformanceClass(bodynetworkId)

Add a custom performance class for an MX network

Add a custom performance class for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body37(); // Body37 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkApplianceTrafficShapingCustomPerformanceClass(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body37**](Body37.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkApplianceVlan"></a>
# **createNetworkApplianceVlan**
> Object createNetworkApplianceVlan(bodynetworkId)

Add a VLAN

Add a VLAN

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body42(); // Body42 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkApplianceVlan(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body42**](Body42.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkCameraQualityRetentionProfile"></a>
# **createNetworkCameraQualityRetentionProfile**
> Object createNetworkCameraQualityRetentionProfile(bodynetworkId)

Creates new quality retention profile for this network.

Creates new quality retention profile for this network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body48(); // Body48 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkCameraQualityRetentionProfile(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body48**](Body48.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkFloorPlan"></a>
# **createNetworkFloorPlan**
> Object createNetworkFloorPlan(bodynetworkId)

Upload a floor plan

Upload a floor plan

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body60(); // Body60 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkFloorPlan(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body60**](Body60.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkGroupPolicy"></a>
# **createNetworkGroupPolicy**
> Object createNetworkGroupPolicy(bodynetworkId)

Create a group policy

Create a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body62(); // Body62 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkGroupPolicy(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body62**](Body62.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkMerakiAuthUser"></a>
# **createNetworkMerakiAuthUser**
> Object createNetworkMerakiAuthUser(bodynetworkId)

Create a user configured with Meraki Authentication for a network (currently only 802.1X RADIUS users can be created, and currently, organizations have a 50,000 user cap)

Create a user configured with Meraki Authentication for a network (currently only 802.1X RADIUS users can be created, and currently, organizations have a 50,000 user cap)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body64(); // Body64 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkMerakiAuthUser(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body64**](Body64.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkMqttBroker"></a>
# **createNetworkMqttBroker**
> Object createNetworkMqttBroker(bodynetworkId)

Add an MQTT broker

Add an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body66(); // Body66 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkMqttBroker(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body66**](Body66.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkPiiRequest"></a>
# **createNetworkPiiRequest**
> Object createNetworkPiiRequest(networkId, opts)

Submit a new delete or restrict processing PII request

Submit a new delete or restrict processing PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body69() // Body69 | 
};
apiInstance.createNetworkPiiRequest(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body69**](Body69.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSmBypassActivationLockAttempt"></a>
# **createNetworkSmBypassActivationLockAttempt**
> Object createNetworkSmBypassActivationLockAttempt(bodynetworkId)

Bypass activation lock attempt

Bypass activation lock attempt

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body71(); // Body71 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSmBypassActivationLockAttempt(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body71**](Body71.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSmTargetGroup"></a>
# **createNetworkSmTargetGroup**
> Object createNetworkSmTargetGroup(networkId, opts)

Add a target group

Add a target group

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body74() // Body74 | 
};
apiInstance.createNetworkSmTargetGroup(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body74**](Body74.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchLinkAggregation"></a>
# **createNetworkSwitchLinkAggregation**
> Object createNetworkSwitchLinkAggregation(networkId, opts)

Create a link aggregation group

Create a link aggregation group

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body80() // Body80 | 
};
apiInstance.createNetworkSwitchLinkAggregation(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body80**](Body80.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchPortSchedule"></a>
# **createNetworkSwitchPortSchedule**
> Object createNetworkSwitchPortSchedule(bodynetworkId)

Add a switch port schedule

Add a switch port schedule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body83(); // Body83 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSwitchPortSchedule(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body83**](Body83.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchQosRule"></a>
# **createNetworkSwitchQosRule**
> Object createNetworkSwitchQosRule(bodynetworkId)

Add a quality of service rule

Add a quality of service rule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body85(); // Body85 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSwitchQosRule(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body85**](Body85.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **createNetworkSwitchRoutingMulticastRendezvousPoint**
> Object createNetworkSwitchRoutingMulticastRendezvousPoint(bodynetworkId)

Create a multicast rendezvous point

Create a multicast rendezvous point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body89(); // Body89 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSwitchRoutingMulticastRendezvousPoint(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body89**](Body89.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchStack"></a>
# **createNetworkSwitchStack**
> Object createNetworkSwitchStack(bodynetworkId)

Create a stack

Create a stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body93(); // Body93 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSwitchStack(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body93**](Body93.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchStackRoutingInterface"></a>
# **createNetworkSwitchStackRoutingInterface**
> Object createNetworkSwitchStackRoutingInterface(bodynetworkIdswitchStackId)

Create a layer 3 interface for a switch stack

Create a layer 3 interface for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body96(); // Body96 | 
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 

apiInstance.createNetworkSwitchStackRoutingInterface(bodynetworkIdswitchStackId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body96**](Body96.md)|  | 
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkSwitchStackRoutingStaticRoute"></a>
# **createNetworkSwitchStackRoutingStaticRoute**
> Object createNetworkSwitchStackRoutingStaticRoute(bodynetworkIdswitchStackId)

Create a layer 3 static route for a switch stack

Create a layer 3 static route for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body99(); // Body99 | 
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 

apiInstance.createNetworkSwitchStackRoutingStaticRoute(bodynetworkIdswitchStackId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body99**](Body99.md)|  | 
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkWebhooksHttpServer"></a>
# **createNetworkWebhooksHttpServer**
> Object createNetworkWebhooksHttpServer(bodynetworkId)

Add an HTTP server to a network

Add an HTTP server to a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body105(); // Body105 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkWebhooksHttpServer(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body105**](Body105.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkWebhooksWebhookTest"></a>
# **createNetworkWebhooksWebhookTest**
> Object createNetworkWebhooksWebhookTest(bodynetworkId)

Send a test webhook for a network

Send a test webhook for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body107(); // Body107 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkWebhooksWebhookTest(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body107**](Body107.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkWirelessRfProfile"></a>
# **createNetworkWirelessRfProfile**
> Object createNetworkWirelessRfProfile(bodynetworkId)

Creates new RF profile for this network

Creates new RF profile for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body110(); // Body110 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkWirelessRfProfile(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body110**](Body110.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNetworkWirelessSsidIdentityPsk"></a>
# **createNetworkWirelessSsidIdentityPsk**
> Object createNetworkWirelessSsidIdentityPsk(bodynetworkId_number)

Create an Identity PSK

Create an Identity PSK

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body116(); // Body116 | 
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.createNetworkWirelessSsidIdentityPsk(bodynetworkId_number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body116**](Body116.md)|  | 
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganization"></a>
# **createOrganization**
> Object createOrganization(body)

Create a new organization

Create a new organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body120(); // Body120 | 

apiInstance.createOrganization(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body120**](Body120.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationActionBatch"></a>
# **createOrganizationActionBatch**
> Object createOrganizationActionBatch(bodyorganizationId)

Create an action batch

Create an action batch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body122(); // Body122 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationActionBatch(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body122**](Body122.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationAdmin"></a>
# **createOrganizationAdmin**
> Object createOrganizationAdmin(bodyorganizationId)

Create a new dashboard administrator

Create a new dashboard administrator

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body124(); // Body124 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationAdmin(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body124**](Body124.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationBrandingPolicy"></a>
# **createOrganizationBrandingPolicy**
> Object createOrganizationBrandingPolicy(bodyorganizationId)

Add a new branding policy to an organization

Add a new branding policy to an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body129(); // Body129 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationBrandingPolicy(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body129**](Body129.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationConfigTemplate"></a>
# **createOrganizationConfigTemplate**
> Object createOrganizationConfigTemplate(bodyorganizationId)

Create a new configuration template

Create a new configuration template

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body134(); // Body134 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationConfigTemplate(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body134**](Body134.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationInsightMonitoredMediaServer"></a>
# **createOrganizationInsightMonitoredMediaServer**
> Object createOrganizationInsightMonitoredMediaServer(bodyorganizationId)

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body137(); // Body137 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationInsightMonitoredMediaServer(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body137**](Body137.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationNetwork"></a>
# **createOrganizationNetwork**
> Object createOrganizationNetwork(bodyorganizationId)

Create a network

Create a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body144(); // Body144 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationNetwork(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body144**](Body144.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationSamlIdp"></a>
# **createOrganizationSamlIdp**
> Object createOrganizationSamlIdp(bodyorganizationId)

Create a SAML IdP for your organization.

Create a SAML IdP for your organization.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body147(); // Body147 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationSamlIdp(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body147**](Body147.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrganizationSamlRole"></a>
# **createOrganizationSamlRole**
> Object createOrganizationSamlRole(bodyorganizationId)

Create a SAML role

Create a SAML role

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body149(); // Body149 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.createOrganizationSamlRole(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body149**](Body149.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeviceSwitchRoutingInterface"></a>
# **deleteDeviceSwitchRoutingInterface**
> deleteDeviceSwitchRoutingInterface(serial, interfaceId)

Delete a layer 3 interface from the switch

Delete a layer 3 interface from the switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 

apiInstance.deleteDeviceSwitchRoutingInterface(serial, interfaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteDeviceSwitchRoutingStaticRoute"></a>
# **deleteDeviceSwitchRoutingStaticRoute**
> deleteDeviceSwitchRoutingStaticRoute(serial, staticRouteId)

Delete a layer 3 static route for a switch

Delete a layer 3 static route for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 

apiInstance.deleteDeviceSwitchRoutingStaticRoute(serial, staticRouteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetwork"></a>
# **deleteNetwork**
> deleteNetwork(networkId)

Delete a network

Delete a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.deleteNetwork(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkApplianceStaticRoute"></a>
# **deleteNetworkApplianceStaticRoute**
> deleteNetworkApplianceStaticRoute(networkId, staticRouteId)

Delete a static route from an MX or teleworker network

Delete a static route from an MX or teleworker network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 

apiInstance.deleteNetworkApplianceStaticRoute(networkId, staticRouteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkApplianceTrafficShapingCustomPerformanceClass"></a>
# **deleteNetworkApplianceTrafficShapingCustomPerformanceClass**
> deleteNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId)

Delete a custom performance class from an MX network

Delete a custom performance class from an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let customPerformanceClassId = "customPerformanceClassId_example"; // String | 

apiInstance.deleteNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **customPerformanceClassId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkApplianceVlan"></a>
# **deleteNetworkApplianceVlan**
> deleteNetworkApplianceVlan(networkId, vlanId)

Delete a VLAN from a network

Delete a VLAN from a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let vlanId = "vlanId_example"; // String | 

apiInstance.deleteNetworkApplianceVlan(networkId, vlanId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **vlanId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkCameraQualityRetentionProfile"></a>
# **deleteNetworkCameraQualityRetentionProfile**
> deleteNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId)

Delete an existing quality retention profile for this network.

Delete an existing quality retention profile for this network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let qualityRetentionProfileId = "qualityRetentionProfileId_example"; // String | 

apiInstance.deleteNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qualityRetentionProfileId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkFloorPlan"></a>
# **deleteNetworkFloorPlan**
> deleteNetworkFloorPlan(networkId, floorPlanId)

Destroy a floor plan

Destroy a floor plan

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let floorPlanId = "floorPlanId_example"; // String | 

apiInstance.deleteNetworkFloorPlan(networkId, floorPlanId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkGroupPolicy"></a>
# **deleteNetworkGroupPolicy**
> deleteNetworkGroupPolicy(networkId, groupPolicyId)

Delete a group policy

Delete a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 

apiInstance.deleteNetworkGroupPolicy(networkId, groupPolicyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkMerakiAuthUser"></a>
# **deleteNetworkMerakiAuthUser**
> deleteNetworkMerakiAuthUser(networkId, merakiAuthUserId)

Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)

Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let merakiAuthUserId = "merakiAuthUserId_example"; // String | 

apiInstance.deleteNetworkMerakiAuthUser(networkId, merakiAuthUserId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkMqttBroker"></a>
# **deleteNetworkMqttBroker**
> deleteNetworkMqttBroker(networkId, mqttBrokerId)

Delete an MQTT broker

Delete an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 

apiInstance.deleteNetworkMqttBroker(networkId, mqttBrokerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **mqttBrokerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkPiiRequest"></a>
# **deleteNetworkPiiRequest**
> deleteNetworkPiiRequest(networkId, requestId)

Delete a restrict processing PII request

Delete a restrict processing PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests/{requestId} &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let requestId = "requestId_example"; // String | 

apiInstance.deleteNetworkPiiRequest(networkId, requestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkSmTargetGroup"></a>
# **deleteNetworkSmTargetGroup**
> deleteNetworkSmTargetGroup(networkId, targetGroupId)

Delete a target group from a network

Delete a target group from a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let targetGroupId = "targetGroupId_example"; // String | 

apiInstance.deleteNetworkSmTargetGroup(networkId, targetGroupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **targetGroupId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkSwitchLinkAggregation"></a>
# **deleteNetworkSwitchLinkAggregation**
> deleteNetworkSwitchLinkAggregation(networkId, linkAggregationId)

Split a link aggregation group into separate ports

Split a link aggregation group into separate ports

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let linkAggregationId = "linkAggregationId_example"; // String | 

apiInstance.deleteNetworkSwitchLinkAggregation(networkId, linkAggregationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **linkAggregationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkSwitchPortSchedule"></a>
# **deleteNetworkSwitchPortSchedule**
> deleteNetworkSwitchPortSchedule(networkId, portScheduleId)

Delete a switch port schedule

Delete a switch port schedule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let portScheduleId = "portScheduleId_example"; // String | 

apiInstance.deleteNetworkSwitchPortSchedule(networkId, portScheduleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portScheduleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkSwitchQosRule"></a>
# **deleteNetworkSwitchQosRule**
> deleteNetworkSwitchQosRule(networkId, qosRuleId)

Delete a quality of service rule

Delete a quality of service rule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let qosRuleId = "qosRuleId_example"; // String | 

apiInstance.deleteNetworkSwitchQosRule(networkId, qosRuleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **deleteNetworkSwitchRoutingMulticastRendezvousPoint**
> deleteNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId)

Delete a multicast rendezvous point

Delete a multicast rendezvous point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let rendezvousPointId = "rendezvousPointId_example"; // String | 

apiInstance.deleteNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **rendezvousPointId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkSwitchStack"></a>
# **deleteNetworkSwitchStack**
> deleteNetworkSwitchStack(networkId, switchStackId)

Delete a stack

Delete a stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 

apiInstance.deleteNetworkSwitchStack(networkId, switchStackId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkSwitchStackRoutingInterface"></a>
# **deleteNetworkSwitchStackRoutingInterface**
> deleteNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId)

Delete a layer 3 interface from a switch stack

Delete a layer 3 interface from a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 

apiInstance.deleteNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkSwitchStackRoutingStaticRoute"></a>
# **deleteNetworkSwitchStackRoutingStaticRoute**
> deleteNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId)

Delete a layer 3 static route for a switch stack

Delete a layer 3 static route for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 

apiInstance.deleteNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkWebhooksHttpServer"></a>
# **deleteNetworkWebhooksHttpServer**
> deleteNetworkWebhooksHttpServer(networkId, httpServerId)

Delete an HTTP server from a network

Delete an HTTP server from a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 

apiInstance.deleteNetworkWebhooksHttpServer(networkId, httpServerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkWirelessRfProfile"></a>
# **deleteNetworkWirelessRfProfile**
> deleteNetworkWirelessRfProfile(networkId, rfProfileId)

Delete a RF Profile

Delete a RF Profile

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let rfProfileId = "rfProfileId_example"; // String | 

apiInstance.deleteNetworkWirelessRfProfile(networkId, rfProfileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **rfProfileId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteNetworkWirelessSsidIdentityPsk"></a>
# **deleteNetworkWirelessSsidIdentityPsk**
> deleteNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId)

Delete an Identity PSK

Delete an Identity PSK

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let identityPskId = "identityPskId_example"; // String | 

apiInstance.deleteNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **identityPskId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrganization"></a>
# **deleteOrganization**
> deleteOrganization(organizationId)

Delete an organization

Delete an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.deleteOrganization(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrganizationActionBatch"></a>
# **deleteOrganizationActionBatch**
> deleteOrganizationActionBatch(organizationId, actionBatchId)

Delete an action batch

Delete an action batch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let actionBatchId = "actionBatchId_example"; // String | 

apiInstance.deleteOrganizationActionBatch(organizationId, actionBatchId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **actionBatchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrganizationAdmin"></a>
# **deleteOrganizationAdmin**
> deleteOrganizationAdmin(organizationId, adminId)

Revoke all access for a dashboard administrator within this organization

Revoke all access for a dashboard administrator within this organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let adminId = "adminId_example"; // String | 

apiInstance.deleteOrganizationAdmin(organizationId, adminId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **adminId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrganizationBrandingPolicy"></a>
# **deleteOrganizationBrandingPolicy**
> deleteOrganizationBrandingPolicy(organizationId, brandingPolicyId)

Delete a branding policy

Delete a branding policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let brandingPolicyId = "brandingPolicyId_example"; // String | 

apiInstance.deleteOrganizationBrandingPolicy(organizationId, brandingPolicyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **brandingPolicyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrganizationConfigTemplate"></a>
# **deleteOrganizationConfigTemplate**
> deleteOrganizationConfigTemplate(organizationId, configTemplateId)

Remove a configuration template

Remove a configuration template

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 

apiInstance.deleteOrganizationConfigTemplate(organizationId, configTemplateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrganizationInsightMonitoredMediaServer"></a>
# **deleteOrganizationInsightMonitoredMediaServer**
> deleteOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId)

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 

apiInstance.deleteOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **monitoredMediaServerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrganizationSamlIdp"></a>
# **deleteOrganizationSamlIdp**
> deleteOrganizationSamlIdp(organizationId, idpId)

Remove a SAML IdP in your organization.

Remove a SAML IdP in your organization.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let idpId = "idpId_example"; // String | 

apiInstance.deleteOrganizationSamlIdp(organizationId, idpId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **idpId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteOrganizationSamlRole"></a>
# **deleteOrganizationSamlRole**
> deleteOrganizationSamlRole(organizationId, samlRoleId)

Remove a SAML role

Remove a SAML role

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let samlRoleId = "samlRoleId_example"; // String | 

apiInstance.deleteOrganizationSamlRole(organizationId, samlRoleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **samlRoleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDevice"></a>
# **getDevice**
> Object getDevice(serial)

Return a single device

Return a single device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDevice(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraQualityAndRetention"></a>
# **getDeviceCameraQualityAndRetention**
> Object getDeviceCameraQualityAndRetention(serial)

Returns quality and retention settings for the given camera

Returns quality and retention settings for the given camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCameraQualityAndRetention(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraSense"></a>
# **getDeviceCameraSense**
> Object getDeviceCameraSense(serial)

Returns sense settings for a given camera

Returns sense settings for a given camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCameraSense(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraSenseObjectDetectionModels"></a>
# **getDeviceCameraSenseObjectDetectionModels**
> Object getDeviceCameraSenseObjectDetectionModels(serial)

Returns the MV Sense object detection model list for the given camera

Returns the MV Sense object detection model list for the given camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCameraSenseObjectDetectionModels(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraVideoLink"></a>
# **getDeviceCameraVideoLink**
> Object getDeviceCameraVideoLink(serial, opts)

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'timestamp': new Date("2013-10-20T19:20:30+01:00") // Date | [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time.
};
apiInstance.getDeviceCameraVideoLink(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **timestamp** | **Date**| [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCameraVideoSettings"></a>
# **getDeviceCameraVideoSettings**
> Object getDeviceCameraVideoSettings(serial)

Returns video settings for the given camera

Returns video settings for the given camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCameraVideoSettings(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCellularGatewayLan"></a>
# **getDeviceCellularGatewayLan**
> Object getDeviceCellularGatewayLan(serial)

Show the LAN Settings of a MG

Show the LAN Settings of a MG

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCellularGatewayLan(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceCellularGatewayPortForwardingRules"></a>
# **getDeviceCellularGatewayPortForwardingRules**
> Object getDeviceCellularGatewayPortForwardingRules(serial)

Returns the port forwarding rules for a single MG.

Returns the port forwarding rules for a single MG.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceCellularGatewayPortForwardingRules(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceManagementInterface"></a>
# **getDeviceManagementInterface**
> Object getDeviceManagementInterface(serial)

Return the management interface settings for a device

Return the management interface settings for a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceManagementInterface(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchPort"></a>
# **getDeviceSwitchPort**
> Object getDeviceSwitchPort(serial, portId)

Return a switch port

Return a switch port

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let portId = "portId_example"; // String | 

apiInstance.getDeviceSwitchPort(serial, portId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **portId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchPorts"></a>
# **getDeviceSwitchPorts**
> Object getDeviceSwitchPorts(serial)

List the switch ports for a switch

List the switch ports for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceSwitchPorts(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingInterface"></a>
# **getDeviceSwitchRoutingInterface**
> Object getDeviceSwitchRoutingInterface(serial, interfaceId)

Return a layer 3 interface for a switch

Return a layer 3 interface for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 

apiInstance.getDeviceSwitchRoutingInterface(serial, interfaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingInterfaceDhcp"></a>
# **getDeviceSwitchRoutingInterfaceDhcp**
> Object getDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId)

Return a layer 3 interface DHCP configuration for a switch

Return a layer 3 interface DHCP configuration for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 

apiInstance.getDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingInterfaces"></a>
# **getDeviceSwitchRoutingInterfaces**
> Object getDeviceSwitchRoutingInterfaces(serial)

List layer 3 interfaces for a switch

List layer 3 interfaces for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceSwitchRoutingInterfaces(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingStaticRoute"></a>
# **getDeviceSwitchRoutingStaticRoute**
> Object getDeviceSwitchRoutingStaticRoute(serial, staticRouteId)

Return a layer 3 static route for a switch

Return a layer 3 static route for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 

apiInstance.getDeviceSwitchRoutingStaticRoute(serial, staticRouteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchRoutingStaticRoutes"></a>
# **getDeviceSwitchRoutingStaticRoutes**
> Object getDeviceSwitchRoutingStaticRoutes(serial)

List layer 3 static routes for a switch

List layer 3 static routes for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceSwitchRoutingStaticRoutes(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceSwitchWarmSpare"></a>
# **getDeviceSwitchWarmSpare**
> Object getDeviceSwitchWarmSpare(serial)

Return warm spare configuration for a switch

Return warm spare configuration for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceSwitchWarmSpare(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceWirelessBluetoothSettings"></a>
# **getDeviceWirelessBluetoothSettings**
> Object getDeviceWirelessBluetoothSettings(serial)

Return the bluetooth settings for a wireless device

Return the bluetooth settings for a wireless device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceWirelessBluetoothSettings(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceWirelessRadioSettings"></a>
# **getDeviceWirelessRadioSettings**
> Object getDeviceWirelessRadioSettings(serial)

Return the radio settings of a device

Return the radio settings of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceWirelessRadioSettings(serial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetwork"></a>
# **getNetwork**
> Object getNetwork(networkId)

Return a network

Return a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetwork(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkAlertsSettings"></a>
# **getNetworkAlertsSettings**
> Object getNetworkAlertsSettings(networkId)

Return the alert configuration for this network

Return the alert configuration for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkAlertsSettings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceConnectivityMonitoringDestinations"></a>
# **getNetworkApplianceConnectivityMonitoringDestinations**
> Object getNetworkApplianceConnectivityMonitoringDestinations(networkId)

Return the connectivity testing destinations for an MX network

Return the connectivity testing destinations for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceConnectivityMonitoringDestinations(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceContentFiltering"></a>
# **getNetworkApplianceContentFiltering**
> Object getNetworkApplianceContentFiltering(networkId)

Return the content filtering settings for an MX network

Return the content filtering settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceContentFiltering(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceContentFilteringCategories"></a>
# **getNetworkApplianceContentFilteringCategories**
> Object getNetworkApplianceContentFilteringCategories(networkId)

List all available content filtering categories for an MX network

List all available content filtering categories for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceContentFilteringCategories(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallCellularFirewallRules"></a>
# **getNetworkApplianceFirewallCellularFirewallRules**
> Object getNetworkApplianceFirewallCellularFirewallRules(networkId)

Return the cellular firewall rules for an MX network

Return the cellular firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallCellularFirewallRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallFirewalledService"></a>
# **getNetworkApplianceFirewallFirewalledService**
> Object getNetworkApplianceFirewallFirewalledService(networkId, service)

Return the accessibility settings of the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

Return the accessibility settings of the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let service = "service_example"; // String | 

apiInstance.getNetworkApplianceFirewallFirewalledService(networkId, service, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **service** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallFirewalledServices"></a>
# **getNetworkApplianceFirewallFirewalledServices**
> Object getNetworkApplianceFirewallFirewalledServices(networkId)

List the appliance services and their accessibility rules

List the appliance services and their accessibility rules

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallFirewalledServices(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallInboundFirewallRules"></a>
# **getNetworkApplianceFirewallInboundFirewallRules**
> Object getNetworkApplianceFirewallInboundFirewallRules(networkId)

Return the inbound firewall rules for an MX network

Return the inbound firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallInboundFirewallRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallL3FirewallRules"></a>
# **getNetworkApplianceFirewallL3FirewallRules**
> Object getNetworkApplianceFirewallL3FirewallRules(networkId)

Return the L3 firewall rules for an MX network

Return the L3 firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallL3FirewallRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallL7FirewallRules"></a>
# **getNetworkApplianceFirewallL7FirewallRules**
> Object getNetworkApplianceFirewallL7FirewallRules(networkId)

List the MX L7 firewall rules for an MX network

List the MX L7 firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallL7FirewallRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallL7FirewallRulesApplicationCategories"></a>
# **getNetworkApplianceFirewallL7FirewallRulesApplicationCategories**
> Object getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(networkId)

Return the L7 firewall application categories and their associated applications for an MX network

Return the L7 firewall application categories and their associated applications for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallOneToManyNatRules"></a>
# **getNetworkApplianceFirewallOneToManyNatRules**
> Object getNetworkApplianceFirewallOneToManyNatRules(networkId)

Return the 1:Many NAT mapping rules for an MX network

Return the 1:Many NAT mapping rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallOneToManyNatRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallOneToOneNatRules"></a>
# **getNetworkApplianceFirewallOneToOneNatRules**
> Object getNetworkApplianceFirewallOneToOneNatRules(networkId)

Return the 1:1 NAT mapping rules for an MX network

Return the 1:1 NAT mapping rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallOneToOneNatRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceFirewallPortForwardingRules"></a>
# **getNetworkApplianceFirewallPortForwardingRules**
> Object getNetworkApplianceFirewallPortForwardingRules(networkId)

Return the port forwarding rules for an MX network

Return the port forwarding rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceFirewallPortForwardingRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkAppliancePort"></a>
# **getNetworkAppliancePort**
> Object getNetworkAppliancePort(networkId, portId)

Return per-port VLAN settings for a single MX port.

Return per-port VLAN settings for a single MX port.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let portId = "portId_example"; // String | 

apiInstance.getNetworkAppliancePort(networkId, portId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkAppliancePorts"></a>
# **getNetworkAppliancePorts**
> Object getNetworkAppliancePorts(networkId)

List per-port VLAN settings for all ports of a MX.

List per-port VLAN settings for all ports of a MX.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkAppliancePorts(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceSecurityIntrusion"></a>
# **getNetworkApplianceSecurityIntrusion**
> Object getNetworkApplianceSecurityIntrusion(networkId)

Returns all supported intrusion settings for an MX network

Returns all supported intrusion settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceSecurityIntrusion(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceSecurityMalware"></a>
# **getNetworkApplianceSecurityMalware**
> Object getNetworkApplianceSecurityMalware(networkId)

Returns all supported malware settings for an MX network

Returns all supported malware settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceSecurityMalware(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceSingleLan"></a>
# **getNetworkApplianceSingleLan**
> Object getNetworkApplianceSingleLan(networkId)

Return single LAN configuration

Return single LAN configuration

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceSingleLan(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceStaticRoute"></a>
# **getNetworkApplianceStaticRoute**
> Object getNetworkApplianceStaticRoute(networkId, staticRouteId)

Return a static route for an MX or teleworker network

Return a static route for an MX or teleworker network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 

apiInstance.getNetworkApplianceStaticRoute(networkId, staticRouteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceStaticRoutes"></a>
# **getNetworkApplianceStaticRoutes**
> Object getNetworkApplianceStaticRoutes(networkId)

List the static routes for an MX or teleworker network

List the static routes for an MX or teleworker network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceStaticRoutes(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceTrafficShapingCustomPerformanceClass"></a>
# **getNetworkApplianceTrafficShapingCustomPerformanceClass**
> Object getNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId)

Return a custom performance class for an MX network

Return a custom performance class for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let customPerformanceClassId = "customPerformanceClassId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **customPerformanceClassId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceTrafficShapingCustomPerformanceClasses"></a>
# **getNetworkApplianceTrafficShapingCustomPerformanceClasses**
> Object getNetworkApplianceTrafficShapingCustomPerformanceClasses(networkId)

List all custom performance classes for an MX network

List all custom performance classes for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingCustomPerformanceClasses(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceTrafficShapingRules"></a>
# **getNetworkApplianceTrafficShapingRules**
> Object getNetworkApplianceTrafficShapingRules(networkId)

Display the traffic shaping settings for an MX network

Display the traffic shaping settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceTrafficShapingUplinkBandwidth"></a>
# **getNetworkApplianceTrafficShapingUplinkBandwidth**
> Object getNetworkApplianceTrafficShapingUplinkBandwidth(networkId)

Returns the uplink bandwidth settings for your MX network.

Returns the uplink bandwidth settings for your MX network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingUplinkBandwidth(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceTrafficShapingUplinkSelection"></a>
# **getNetworkApplianceTrafficShapingUplinkSelection**
> Object getNetworkApplianceTrafficShapingUplinkSelection(networkId)

Show uplink selection settings for an MX network

Show uplink selection settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingUplinkSelection(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceVlan"></a>
# **getNetworkApplianceVlan**
> Object getNetworkApplianceVlan(networkId, vlanId)

Return a VLAN

Return a VLAN

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let vlanId = "vlanId_example"; // String | 

apiInstance.getNetworkApplianceVlan(networkId, vlanId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **vlanId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceVlans"></a>
# **getNetworkApplianceVlans**
> Object getNetworkApplianceVlans(networkId)

List the VLANs for an MX network

List the VLANs for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceVlans(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceVlansSettings"></a>
# **getNetworkApplianceVlansSettings**
> Object getNetworkApplianceVlansSettings(networkId)

Returns the enabled status of VLANs for the network

Returns the enabled status of VLANs for the network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceVlansSettings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceVpnSiteToSiteVpn"></a>
# **getNetworkApplianceVpnSiteToSiteVpn**
> Object getNetworkApplianceVpnSiteToSiteVpn(networkId)

Return the site-to-site VPN settings of a network. Only valid for MX networks.

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceVpnSiteToSiteVpn(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceWarmSpare"></a>
# **getNetworkApplianceWarmSpare**
> Object getNetworkApplianceWarmSpare(networkId)

Return MX warm spare settings

Return MX warm spare settings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceWarmSpare(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkCameraQualityRetentionProfile"></a>
# **getNetworkCameraQualityRetentionProfile**
> Object getNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId)

Retrieve a single quality retention profile

Retrieve a single quality retention profile

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let qualityRetentionProfileId = "qualityRetentionProfileId_example"; // String | 

apiInstance.getNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qualityRetentionProfileId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkCameraQualityRetentionProfiles"></a>
# **getNetworkCameraQualityRetentionProfiles**
> Object getNetworkCameraQualityRetentionProfiles(networkId)

List the quality retention profiles for this network

List the quality retention profiles for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkCameraQualityRetentionProfiles(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkCameraSchedules"></a>
# **getNetworkCameraSchedules**
> Object getNetworkCameraSchedules(networkId)

Returns a list of all camera recording schedules.

Returns a list of all camera recording schedules.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkCameraSchedules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkCellularGatewayConnectivityMonitoringDestinations"></a>
# **getNetworkCellularGatewayConnectivityMonitoringDestinations**
> Object getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId)

Return the connectivity testing destinations for an MG network

Return the connectivity testing destinations for an MG network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkCellularGatewayDhcp"></a>
# **getNetworkCellularGatewayDhcp**
> Object getNetworkCellularGatewayDhcp(networkId)

List common DHCP settings of MGs

List common DHCP settings of MGs

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkCellularGatewayDhcp(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkCellularGatewaySubnetPool"></a>
# **getNetworkCellularGatewaySubnetPool**
> Object getNetworkCellularGatewaySubnetPool(networkId)

Return the subnet pool and mask configured for MGs in the network.

Return the subnet pool and mask configured for MGs in the network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkCellularGatewaySubnetPool(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkCellularGatewayUplink"></a>
# **getNetworkCellularGatewayUplink**
> Object getNetworkCellularGatewayUplink(networkId)

Returns the uplink settings for your MG network.

Returns the uplink settings for your MG network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkCellularGatewayUplink(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClientPolicy"></a>
# **getNetworkClientPolicy**
> Object getNetworkClientPolicy(networkId, clientId)

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClientPolicy(networkId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkClientSplashAuthorizationStatus"></a>
# **getNetworkClientSplashAuthorizationStatus**
> Object getNetworkClientSplashAuthorizationStatus(networkId, clientId)

Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClientSplashAuthorizationStatus(networkId, clientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkDevices"></a>
# **getNetworkDevices**
> Object getNetworkDevices(networkId)

List the devices in a network

List the devices in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkDevices(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkFirmwareUpgrades"></a>
# **getNetworkFirmwareUpgrades**
> Object getNetworkFirmwareUpgrades(networkId)

Get current maintenance window for a network

Get current maintenance window for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkFirmwareUpgrades(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkFloorPlan"></a>
# **getNetworkFloorPlan**
> Object getNetworkFloorPlan(networkId, floorPlanId)

Find a floor plan by ID

Find a floor plan by ID

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let floorPlanId = "floorPlanId_example"; // String | 

apiInstance.getNetworkFloorPlan(networkId, floorPlanId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkFloorPlans"></a>
# **getNetworkFloorPlans**
> Object getNetworkFloorPlans(networkId)

List the floor plans that belong to your network

List the floor plans that belong to your network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkFloorPlans(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkGroupPolicies"></a>
# **getNetworkGroupPolicies**
> Object getNetworkGroupPolicies(networkId)

List the group policies in a network

List the group policies in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkGroupPolicies(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkGroupPolicy"></a>
# **getNetworkGroupPolicy**
> Object getNetworkGroupPolicy(networkId, groupPolicyId)

Display a group policy

Display a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 

apiInstance.getNetworkGroupPolicy(networkId, groupPolicyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMerakiAuthUser"></a>
# **getNetworkMerakiAuthUser**
> Object getNetworkMerakiAuthUser(networkId, merakiAuthUserId)

Return the Meraki Auth splash or RADIUS user

Return the Meraki Auth splash or RADIUS user

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let merakiAuthUserId = "merakiAuthUserId_example"; // String | 

apiInstance.getNetworkMerakiAuthUser(networkId, merakiAuthUserId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMerakiAuthUsers"></a>
# **getNetworkMerakiAuthUsers**
> Object getNetworkMerakiAuthUsers(networkId)

List the splash or RADIUS users configured under Meraki Authentication for a network

List the splash or RADIUS users configured under Meraki Authentication for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkMerakiAuthUsers(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMqttBroker"></a>
# **getNetworkMqttBroker**
> Object getNetworkMqttBroker(networkId, mqttBrokerId)

Return an MQTT broker

Return an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 

apiInstance.getNetworkMqttBroker(networkId, mqttBrokerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **mqttBrokerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkMqttBrokers"></a>
# **getNetworkMqttBrokers**
> Object getNetworkMqttBrokers(networkId)

List the MQTT brokers for this network

List the MQTT brokers for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkMqttBrokers(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkNetflow"></a>
# **getNetworkNetflow**
> Object getNetworkNetflow(networkId)

Return the NetFlow traffic reporting settings for a network

Return the NetFlow traffic reporting settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkNetflow(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkNetworkHealthChannelUtilization"></a>
# **getNetworkNetworkHealthChannelUtilization**
> Object getNetworkNetworkHealthChannelUtilization(networkId, opts)

Get the channel utilization over each radio for all APs in a network.

Get the channel utilization over each radio for all APs in a network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 100. Default is 10.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkNetworkHealthChannelUtilization(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 100. Default is 10. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiPiiKeys"></a>
# **getNetworkPiiPiiKeys**
> Object getNetworkPiiPiiKeys(networkId, opts)

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \&quot;0\&quot; containing the applicable keys.

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \&quot;0\&quot; containing the applicable keys.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/piiKeys &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'username': "username_example", // String | The username of a Systems Manager user
  'email': "email_example", // String | The email of a network user account or a Systems Manager device
  'mac': "mac_example", // String | The MAC of a network client device or a Systems Manager device
  'serial': "serial_example", // String | The serial of a Systems Manager device
  'imei': "imei_example", // String | The IMEI of a Systems Manager device
  'bluetoothMac': "bluetoothMac_example" // String | The MAC of a Bluetooth client
};
apiInstance.getNetworkPiiPiiKeys(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **username** | **String**| The username of a Systems Manager user | [optional] 
 **email** | **String**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **String**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **String**| The serial of a Systems Manager device | [optional] 
 **imei** | **String**| The IMEI of a Systems Manager device | [optional] 
 **bluetoothMac** | **String**| The MAC of a Bluetooth client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiRequest"></a>
# **getNetworkPiiRequest**
> Object getNetworkPiiRequest(networkId, requestId)

Return a PII request

Return a PII request  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests/{requestId} &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let requestId = "requestId_example"; // String | 

apiInstance.getNetworkPiiRequest(networkId, requestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **requestId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiRequests"></a>
# **getNetworkPiiRequests**
> Object getNetworkPiiRequests(networkId)

List the PII requests for this network or organization

List the PII requests for this network or organization  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/requests &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkPiiRequests(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiSmDevicesForKey"></a>
# **getNetworkPiiSmDevicesForKey**
> Object getNetworkPiiSmDevicesForKey(networkId, opts)

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/smDevicesForKey &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'username': "username_example", // String | The username of a Systems Manager user
  'email': "email_example", // String | The email of a network user account or a Systems Manager device
  'mac': "mac_example", // String | The MAC of a network client device or a Systems Manager device
  'serial': "serial_example", // String | The serial of a Systems Manager device
  'imei': "imei_example", // String | The IMEI of a Systems Manager device
  'bluetoothMac': "bluetoothMac_example" // String | The MAC of a Bluetooth client
};
apiInstance.getNetworkPiiSmDevicesForKey(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **username** | **String**| The username of a Systems Manager user | [optional] 
 **email** | **String**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **String**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **String**| The serial of a Systems Manager device | [optional] 
 **imei** | **String**| The IMEI of a Systems Manager device | [optional] 
 **bluetoothMac** | **String**| The MAC of a Bluetooth client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkPiiSmOwnersForKey"></a>
# **getNetworkPiiSmOwnersForKey**
> Object getNetworkPiiSmOwnersForKey(networkId, opts)

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  &#x60;&#x60;&#x60; /organizations/{organizationId}/pii/smOwnersForKey &#x60;&#x60;&#x60;

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'username': "username_example", // String | The username of a Systems Manager user
  'email': "email_example", // String | The email of a network user account or a Systems Manager device
  'mac': "mac_example", // String | The MAC of a network client device or a Systems Manager device
  'serial': "serial_example", // String | The serial of a Systems Manager device
  'imei': "imei_example", // String | The IMEI of a Systems Manager device
  'bluetoothMac': "bluetoothMac_example" // String | The MAC of a Bluetooth client
};
apiInstance.getNetworkPiiSmOwnersForKey(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **username** | **String**| The username of a Systems Manager user | [optional] 
 **email** | **String**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **String**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **String**| The serial of a Systems Manager device | [optional] 
 **imei** | **String**| The IMEI of a Systems Manager device | [optional] 
 **bluetoothMac** | **String**| The MAC of a Bluetooth client | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSettings"></a>
# **getNetworkSettings**
> Object getNetworkSettings(networkId)

Return the settings for a network

Return the settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSettings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmBypassActivationLockAttempt"></a>
# **getNetworkSmBypassActivationLockAttempt**
> Object getNetworkSmBypassActivationLockAttempt(networkId, attemptId)

Bypass activation lock attempt status

Bypass activation lock attempt status

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let attemptId = "attemptId_example"; // String | 

apiInstance.getNetworkSmBypassActivationLockAttempt(networkId, attemptId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **attemptId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceCerts"></a>
# **getNetworkSmDeviceCerts**
> Object getNetworkSmDeviceCerts(networkId, deviceId)

List the certs on a device

List the certs on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceCerts(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceDeviceProfiles"></a>
# **getNetworkSmDeviceDeviceProfiles**
> Object getNetworkSmDeviceDeviceProfiles(networkId, deviceId)

Get the profiles associated with a device

Get the profiles associated with a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceDeviceProfiles(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceNetworkAdapters"></a>
# **getNetworkSmDeviceNetworkAdapters**
> Object getNetworkSmDeviceNetworkAdapters(networkId, deviceId)

List the network adapters of a device

List the network adapters of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceNetworkAdapters(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceRestrictions"></a>
# **getNetworkSmDeviceRestrictions**
> Object getNetworkSmDeviceRestrictions(networkId, deviceId)

List the restrictions on a device

List the restrictions on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceRestrictions(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceSecurityCenters"></a>
# **getNetworkSmDeviceSecurityCenters**
> Object getNetworkSmDeviceSecurityCenters(networkId, deviceId)

List the security centers on a device

List the security centers on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceSecurityCenters(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceSoftwares"></a>
# **getNetworkSmDeviceSoftwares**
> Object getNetworkSmDeviceSoftwares(networkId, deviceId)

Get a list of softwares associated with a device

Get a list of softwares associated with a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceSoftwares(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmDeviceWlanLists"></a>
# **getNetworkSmDeviceWlanLists**
> Object getNetworkSmDeviceWlanLists(networkId, deviceId)

List the saved SSID names on a device

List the saved SSID names on a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceWlanLists(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmProfiles"></a>
# **getNetworkSmProfiles**
> Object getNetworkSmProfiles(networkId)

List all profiles in a network

List all profiles in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSmProfiles(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmTargetGroup"></a>
# **getNetworkSmTargetGroup**
> Object getNetworkSmTargetGroup(networkId, targetGroupId, opts)

Return a target group

Return a target group

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let targetGroupId = "targetGroupId_example"; // String | 
let opts = { 
  'withDetails': true // Boolean | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
};
apiInstance.getNetworkSmTargetGroup(networkId, targetGroupId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **targetGroupId** | **String**|  | 
 **withDetails** | **Boolean**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmTargetGroups"></a>
# **getNetworkSmTargetGroups**
> Object getNetworkSmTargetGroups(networkId, opts)

List the target groups in this network

List the target groups in this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'withDetails': true // Boolean | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
};
apiInstance.getNetworkSmTargetGroups(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **withDetails** | **Boolean**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmUserDeviceProfiles"></a>
# **getNetworkSmUserDeviceProfiles**
> Object getNetworkSmUserDeviceProfiles(networkId, userId)

Get the profiles associated with a user

Get the profiles associated with a user

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let userId = "userId_example"; // String | 

apiInstance.getNetworkSmUserDeviceProfiles(networkId, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSmUserSoftwares"></a>
# **getNetworkSmUserSoftwares**
> Object getNetworkSmUserSoftwares(networkId, userId)

Get a list of softwares associated with a user

Get a list of softwares associated with a user

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let userId = "userId_example"; // String | 

apiInstance.getNetworkSmUserSoftwares(networkId, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSnmp"></a>
# **getNetworkSnmp**
> Object getNetworkSnmp(networkId)

Return the SNMP settings for a network

Return the SNMP settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSnmp(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchAccessControlLists"></a>
# **getNetworkSwitchAccessControlLists**
> Object getNetworkSwitchAccessControlLists(networkId)

Return the access control lists for a MS network

Return the access control lists for a MS network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchAccessControlLists(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchDhcpServerPolicy"></a>
# **getNetworkSwitchDhcpServerPolicy**
> Object getNetworkSwitchDhcpServerPolicy(networkId)

Return the DHCP server policy

Return the DHCP server policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchDhcpServerPolicy(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchDscpToCosMappings"></a>
# **getNetworkSwitchDscpToCosMappings**
> Object getNetworkSwitchDscpToCosMappings(networkId)

Return the DSCP to CoS mappings

Return the DSCP to CoS mappings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchDscpToCosMappings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchLinkAggregations"></a>
# **getNetworkSwitchLinkAggregations**
> Object getNetworkSwitchLinkAggregations(networkId)

List link aggregation groups

List link aggregation groups

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchLinkAggregations(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchMtu"></a>
# **getNetworkSwitchMtu**
> Object getNetworkSwitchMtu(networkId)

Return the MTU configuration

Return the MTU configuration

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchMtu(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchPortSchedules"></a>
# **getNetworkSwitchPortSchedules**
> Object getNetworkSwitchPortSchedules(networkId)

List switch port schedules

List switch port schedules

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchPortSchedules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchQosRule"></a>
# **getNetworkSwitchQosRule**
> Object getNetworkSwitchQosRule(networkId, qosRuleId)

Return a quality of service rule

Return a quality of service rule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let qosRuleId = "qosRuleId_example"; // String | 

apiInstance.getNetworkSwitchQosRule(networkId, qosRuleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchQosRules"></a>
# **getNetworkSwitchQosRules**
> Object getNetworkSwitchQosRules(networkId)

List quality of service rules

List quality of service rules

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchQosRules(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchQosRulesOrder"></a>
# **getNetworkSwitchQosRulesOrder**
> Object getNetworkSwitchQosRulesOrder(networkId)

Return the quality of service rule IDs by order in which they will be processed by the switch

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchQosRulesOrder(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchRoutingMulticast"></a>
# **getNetworkSwitchRoutingMulticast**
> Object getNetworkSwitchRoutingMulticast(networkId)

Return multicast settings for a network

Return multicast settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchRoutingMulticast(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **getNetworkSwitchRoutingMulticastRendezvousPoint**
> Object getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId)

Return a multicast rendezvous point

Return a multicast rendezvous point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let rendezvousPointId = "rendezvousPointId_example"; // String | 

apiInstance.getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **rendezvousPointId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchRoutingMulticastRendezvousPoints"></a>
# **getNetworkSwitchRoutingMulticastRendezvousPoints**
> Object getNetworkSwitchRoutingMulticastRendezvousPoints(networkId)

List multicast rendezvous points

List multicast rendezvous points

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchRoutingMulticastRendezvousPoints(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchRoutingOspf"></a>
# **getNetworkSwitchRoutingOspf**
> Object getNetworkSwitchRoutingOspf(networkId)

Return layer 3 OSPF routing configuration

Return layer 3 OSPF routing configuration

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchRoutingOspf(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchSettings"></a>
# **getNetworkSwitchSettings**
> Object getNetworkSwitchSettings(networkId)

Returns the switch network settings

Returns the switch network settings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchSettings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStack"></a>
# **getNetworkSwitchStack**
> Object getNetworkSwitchStack(networkId, switchStackId)

Show a switch stack

Show a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 

apiInstance.getNetworkSwitchStack(networkId, switchStackId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingInterface"></a>
# **getNetworkSwitchStackRoutingInterface**
> Object getNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId)

Return a layer 3 interface from a switch stack

Return a layer 3 interface from a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 

apiInstance.getNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingInterfaceDhcp"></a>
# **getNetworkSwitchStackRoutingInterfaceDhcp**
> Object getNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId)

Return a layer 3 interface DHCP configuration for a switch stack

Return a layer 3 interface DHCP configuration for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 

apiInstance.getNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingInterfaces"></a>
# **getNetworkSwitchStackRoutingInterfaces**
> Object getNetworkSwitchStackRoutingInterfaces(networkId, switchStackId)

List layer 3 interfaces for a switch stack

List layer 3 interfaces for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 

apiInstance.getNetworkSwitchStackRoutingInterfaces(networkId, switchStackId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingStaticRoute"></a>
# **getNetworkSwitchStackRoutingStaticRoute**
> Object getNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId)

Return a layer 3 static route for a switch stack

Return a layer 3 static route for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 

apiInstance.getNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **staticRouteId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStackRoutingStaticRoutes"></a>
# **getNetworkSwitchStackRoutingStaticRoutes**
> Object getNetworkSwitchStackRoutingStaticRoutes(networkId, switchStackId)

List layer 3 static routes for a switch stack

List layer 3 static routes for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 

apiInstance.getNetworkSwitchStackRoutingStaticRoutes(networkId, switchStackId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStacks"></a>
# **getNetworkSwitchStacks**
> Object getNetworkSwitchStacks(networkId)

List the switch stacks in a network

List the switch stacks in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchStacks(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStormControl"></a>
# **getNetworkSwitchStormControl**
> Object getNetworkSwitchStormControl(networkId)

Return the storm control configuration for a switch network

Return the storm control configuration for a switch network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchStormControl(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchStp"></a>
# **getNetworkSwitchStp**
> Object getNetworkSwitchStp(networkId)

Returns STP settings

Returns STP settings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchStp(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSyslogServers"></a>
# **getNetworkSyslogServers**
> Object getNetworkSyslogServers(networkId)

List the syslog servers for a network

List the syslog servers for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSyslogServers(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkTrafficAnalysis"></a>
# **getNetworkTrafficAnalysis**
> Object getNetworkTrafficAnalysis(networkId)

Return the traffic analysis settings for a network

Return the traffic analysis settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkTrafficAnalysis(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkTrafficShapingApplicationCategories"></a>
# **getNetworkTrafficShapingApplicationCategories**
> Object getNetworkTrafficShapingApplicationCategories(networkId)

Returns the application categories for traffic shaping rules.

Returns the application categories for traffic shaping rules.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkTrafficShapingApplicationCategories(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkTrafficShapingDscpTaggingOptions"></a>
# **getNetworkTrafficShapingDscpTaggingOptions**
> Object getNetworkTrafficShapingDscpTaggingOptions(networkId)

Returns the available DSCP tagging options for your traffic shaping rules.

Returns the available DSCP tagging options for your traffic shaping rules.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkTrafficShapingDscpTaggingOptions(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWebhooksHttpServer"></a>
# **getNetworkWebhooksHttpServer**
> Object getNetworkWebhooksHttpServer(networkId, httpServerId)

Return an HTTP server for a network

Return an HTTP server for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 

apiInstance.getNetworkWebhooksHttpServer(networkId, httpServerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWebhooksHttpServers"></a>
# **getNetworkWebhooksHttpServers**
> Object getNetworkWebhooksHttpServers(networkId)

List the HTTP servers for a network

List the HTTP servers for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkWebhooksHttpServers(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWebhooksWebhookTest"></a>
# **getNetworkWebhooksWebhookTest**
> Object getNetworkWebhooksWebhookTest(networkId, webhookTestId)

Return the status of a webhook test for a network

Return the status of a webhook test for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let webhookTestId = "webhookTestId_example"; // String | 

apiInstance.getNetworkWebhooksWebhookTest(networkId, webhookTestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **webhookTestId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessAlternateManagementInterface"></a>
# **getNetworkWirelessAlternateManagementInterface**
> Object getNetworkWirelessAlternateManagementInterface(networkId)

Return alternate management interface and devices with IP assigned

Return alternate management interface and devices with IP assigned

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkWirelessAlternateManagementInterface(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessBluetoothSettings"></a>
# **getNetworkWirelessBluetoothSettings**
> Object getNetworkWirelessBluetoothSettings(networkId)

Return the Bluetooth settings for a network. &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt; must be enabled on the network.

Return the Bluetooth settings for a network. &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt; must be enabled on the network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkWirelessBluetoothSettings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessRfProfile"></a>
# **getNetworkWirelessRfProfile**
> Object getNetworkWirelessRfProfile(networkId, rfProfileId)

Return a RF profile

Return a RF profile

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let rfProfileId = "rfProfileId_example"; // String | 

apiInstance.getNetworkWirelessRfProfile(networkId, rfProfileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **rfProfileId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessRfProfiles"></a>
# **getNetworkWirelessRfProfiles**
> Object getNetworkWirelessRfProfiles(networkId, opts)

List the non-basic RF profiles for this network

List the non-basic RF profiles for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'includeTemplateProfiles': true // Boolean |     If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template     should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. 
};
apiInstance.getNetworkWirelessRfProfiles(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **includeTemplateProfiles** | **Boolean**|     If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template     should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false.  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSettings"></a>
# **getNetworkWirelessSettings**
> Object getNetworkWirelessSettings(networkId)

Return the wireless settings for a network

Return the wireless settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkWirelessSettings(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsid"></a>
# **getNetworkWirelessSsid**
> Object getNetworkWirelessSsid(networkId, _number)

Return a single MR SSID

Return a single MR SSID

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.getNetworkWirelessSsid(networkId, _number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsidFirewallL3FirewallRules"></a>
# **getNetworkWirelessSsidFirewallL3FirewallRules**
> Object getNetworkWirelessSsidFirewallL3FirewallRules(networkId, _number)

Return the L3 firewall rules for an SSID on an MR network

Return the L3 firewall rules for an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.getNetworkWirelessSsidFirewallL3FirewallRules(networkId, _number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsidFirewallL7FirewallRules"></a>
# **getNetworkWirelessSsidFirewallL7FirewallRules**
> Object getNetworkWirelessSsidFirewallL7FirewallRules(networkId, _number)

Return the L7 firewall rules for an SSID on an MR network

Return the L7 firewall rules for an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.getNetworkWirelessSsidFirewallL7FirewallRules(networkId, _number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsidIdentityPsk"></a>
# **getNetworkWirelessSsidIdentityPsk**
> Object getNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId)

Return an Identity PSK

Return an Identity PSK

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let identityPskId = "identityPskId_example"; // String | 

apiInstance.getNetworkWirelessSsidIdentityPsk(networkId, _number, identityPskId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **identityPskId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsidIdentityPsks"></a>
# **getNetworkWirelessSsidIdentityPsks**
> Object getNetworkWirelessSsidIdentityPsks(networkId, _number)

List all Identity PSKs in a wireless network

List all Identity PSKs in a wireless network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.getNetworkWirelessSsidIdentityPsks(networkId, _number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsidSplashSettings"></a>
# **getNetworkWirelessSsidSplashSettings**
> Object getNetworkWirelessSsidSplashSettings(networkId, _number)

Display the splash page settings for the given SSID

Display the splash page settings for the given SSID

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.getNetworkWirelessSsidSplashSettings(networkId, _number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsidTrafficShapingRules"></a>
# **getNetworkWirelessSsidTrafficShapingRules**
> Object getNetworkWirelessSsidTrafficShapingRules(networkId, _number)

Display the traffic shaping settings for a SSID on an MR network

Display the traffic shaping settings for a SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 

apiInstance.getNetworkWirelessSsidTrafficShapingRules(networkId, _number, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkWirelessSsids"></a>
# **getNetworkWirelessSsids**
> Object getNetworkWirelessSsids(networkId)

List the MR SSIDs in a network

List the MR SSIDs in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkWirelessSsids(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganization"></a>
# **getOrganization**
> Object getOrganization(organizationId)

Return an organization

Return an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganization(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationActionBatch"></a>
# **getOrganizationActionBatch**
> Object getOrganizationActionBatch(organizationId, actionBatchId)

Return an action batch

Return an action batch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let actionBatchId = "actionBatchId_example"; // String | 

apiInstance.getOrganizationActionBatch(organizationId, actionBatchId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **actionBatchId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationActionBatches"></a>
# **getOrganizationActionBatches**
> Object getOrganizationActionBatches(organizationId, opts)

Return the list of action batches in the organization

Return the list of action batches in the organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'status': "status_example" // String | Filter batches by status. Valid types are pending, completed, and failed.
};
apiInstance.getOrganizationActionBatches(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **status** | **String**| Filter batches by status. Valid types are pending, completed, and failed. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationAdmins"></a>
# **getOrganizationAdmins**
> Object getOrganizationAdmins(organizationId)

List the dashboard administrators in this organization

List the dashboard administrators in this organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationAdmins(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApplianceSecurityIntrusion"></a>
# **getOrganizationApplianceSecurityIntrusion**
> Object getOrganizationApplianceSecurityIntrusion(organizationId)

Returns all supported intrusion settings for an organization

Returns all supported intrusion settings for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationApplianceSecurityIntrusion(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApplianceVpnThirdPartyVPNPeers"></a>
# **getOrganizationApplianceVpnThirdPartyVPNPeers**
> Object getOrganizationApplianceVpnThirdPartyVPNPeers(organizationId)

Return the third party VPN peers for an organization

Return the third party VPN peers for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationApplianceVpnVpnFirewallRules"></a>
# **getOrganizationApplianceVpnVpnFirewallRules**
> Object getOrganizationApplianceVpnVpnFirewallRules(organizationId)

Return the firewall rules for an organization&#x27;s site-to-site VPN

Return the firewall rules for an organization&#x27;s site-to-site VPN

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationApplianceVpnVpnFirewallRules(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationBrandingPolicies"></a>
# **getOrganizationBrandingPolicies**
> Object getOrganizationBrandingPolicies(organizationId)

List the branding policies of an organization

List the branding policies of an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationBrandingPolicies(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationBrandingPoliciesPriorities"></a>
# **getOrganizationBrandingPoliciesPriorities**
> Object getOrganizationBrandingPoliciesPriorities(organizationId)

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationBrandingPoliciesPriorities(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationBrandingPolicy"></a>
# **getOrganizationBrandingPolicy**
> Object getOrganizationBrandingPolicy(organizationId, brandingPolicyId)

Return a branding policy

Return a branding policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let brandingPolicyId = "brandingPolicyId_example"; // String | 

apiInstance.getOrganizationBrandingPolicy(organizationId, brandingPolicyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **brandingPolicyId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplate"></a>
# **getOrganizationConfigTemplate**
> Object getOrganizationConfigTemplate(organizationId, configTemplateId)

Return a single configuration template

Return a single configuration template

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 

apiInstance.getOrganizationConfigTemplate(organizationId, configTemplateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfilePort"></a>
# **getOrganizationConfigTemplateSwitchProfilePort**
> Object getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId)

Return a switch profile port

Return a switch profile port

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 
let profileId = "profileId_example"; // String | 
let portId = "portId_example"; // String | 

apiInstance.getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 
 **portId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfilePorts"></a>
# **getOrganizationConfigTemplateSwitchProfilePorts**
> Object getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId)

Return all the ports of a switch profile

Return all the ports of a switch profile

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 
let profileId = "profileId_example"; // String | 

apiInstance.getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplateSwitchProfiles"></a>
# **getOrganizationConfigTemplateSwitchProfiles**
> Object getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId)

List the switch profiles for your switch template configuration

List the switch profiles for your switch template configuration

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 

apiInstance.getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationConfigTemplates"></a>
# **getOrganizationConfigTemplates**
> Object getOrganizationConfigTemplates(organizationId)

List the configuration templates for this organization

List the configuration templates for this organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationConfigTemplates(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationDevices"></a>
# **getOrganizationDevices**
> Object getOrganizationDevices(organizationId, opts)

List the devices in an organization

List the devices in an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'configurationUpdatedAfter': "configurationUpdatedAfter_example" // String | Filter results by whether or not the device's configuration has been updated after the given timestamp
};
apiInstance.getOrganizationDevices(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **configurationUpdatedAfter** | **String**| Filter results by whether or not the device&#x27;s configuration has been updated after the given timestamp | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationInsightMonitoredMediaServer"></a>
# **getOrganizationInsightMonitoredMediaServer**
> Object getOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId)

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 

apiInstance.getOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **monitoredMediaServerId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationInsightMonitoredMediaServers"></a>
# **getOrganizationInsightMonitoredMediaServers**
> Object getOrganizationInsightMonitoredMediaServers(organizationId)

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationInsightMonitoredMediaServers(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationInventoryDevices"></a>
# **getOrganizationInventoryDevices**
> Object getOrganizationInventoryDevices(organizationId, opts)

Return the device inventory for an organization

Return the device inventory for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'usedState': "usedState_example" // String | Filter results by used or unused inventory. Accepted values are \"used\" or \"unused\".
};
apiInstance.getOrganizationInventoryDevices(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **usedState** | **String**| Filter results by used or unused inventory. Accepted values are \&quot;used\&quot; or \&quot;unused\&quot;. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationLicense"></a>
# **getOrganizationLicense**
> Object getOrganizationLicense(organizationId, licenseId)

Display a license

Display a license

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let licenseId = "licenseId_example"; // String | 

apiInstance.getOrganizationLicense(organizationId, licenseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **licenseId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationLicenses"></a>
# **getOrganizationLicenses**
> Object getOrganizationLicenses(organizationId, opts)

List the licenses for an organization

List the licenses for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'deviceSerial': "deviceSerial_example", // String | Filter the licenses to those assigned to a particular device
  'networkId': "networkId_example", // String | Filter the licenses to those assigned in a particular network
  'state': "state_example" // String | Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'unused', 'unusedActive' or 'recentlyQueued'
};
apiInstance.getOrganizationLicenses(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **deviceSerial** | **String**| Filter the licenses to those assigned to a particular device | [optional] 
 **networkId** | **String**| Filter the licenses to those assigned in a particular network | [optional] 
 **state** | **String**| Filter the licenses to those in a particular state. Can be one of &#x27;active&#x27;, &#x27;expired&#x27;, &#x27;expiring&#x27;, &#x27;unused&#x27;, &#x27;unusedActive&#x27; or &#x27;recentlyQueued&#x27; | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationNetworks"></a>
# **getOrganizationNetworks**
> Object getOrganizationNetworks(organizationId, opts)

List the networks that the user has privileges on in an organization

List the networks that the user has privileges on in an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'configTemplateId': "configTemplateId_example", // String | An optional parameter that is the ID of a config template. Will return all networks bound to that template.
  'tags': ["tags_example"], // [String] | An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below).
  'tagsFilterType': "tagsFilterType_example", // String | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getOrganizationNetworks(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**| An optional parameter that is the ID of a config template. Will return all networks bound to that template. | [optional] 
 **tags** | [**[String]**](String.md)| An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, &#x27;tagsFilterType&#x27; should also be included (see below). | [optional] 
 **tagsFilterType** | **String**| An optional parameter of value &#x27;withAnyTags&#x27; or &#x27;withAllTags&#x27; to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, &#x27;withAnyTags&#x27; will be selected. | [optional] 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSaml"></a>
# **getOrganizationSaml**
> Object getOrganizationSaml(organizationId)

Returns the SAML SSO enabled settings for an organization.

Returns the SAML SSO enabled settings for an organization.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSaml(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSamlIdp"></a>
# **getOrganizationSamlIdp**
> Object getOrganizationSamlIdp(organizationId, idpId)

Get a SAML IdP from your organization.

Get a SAML IdP from your organization.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let idpId = "idpId_example"; // String | 

apiInstance.getOrganizationSamlIdp(organizationId, idpId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **idpId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSamlIdps"></a>
# **getOrganizationSamlIdps**
> Object getOrganizationSamlIdps(organizationId)

List the SAML IdPs in your organization.

List the SAML IdPs in your organization.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSamlIdps(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSamlRole"></a>
# **getOrganizationSamlRole**
> Object getOrganizationSamlRole(organizationId, samlRoleId)

Return a SAML role

Return a SAML role

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let samlRoleId = "samlRoleId_example"; // String | 

apiInstance.getOrganizationSamlRole(organizationId, samlRoleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **samlRoleId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSamlRoles"></a>
# **getOrganizationSamlRoles**
> Object getOrganizationSamlRoles(organizationId)

List the SAML roles for this organization

List the SAML roles for this organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSamlRoles(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSmApnsCert"></a>
# **getOrganizationSmApnsCert**
> Object getOrganizationSmApnsCert(organizationId)

Get the organization&#x27;s APNS certificate

Get the organization&#x27;s APNS certificate

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSmApnsCert(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSmVppAccount"></a>
# **getOrganizationSmVppAccount**
> Object getOrganizationSmVppAccount(organizationId, vppAccountId)

Get a hash containing the unparsed token of the VPP account with the given ID

Get a hash containing the unparsed token of the VPP account with the given ID

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let vppAccountId = "vppAccountId_example"; // String | 

apiInstance.getOrganizationSmVppAccount(organizationId, vppAccountId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **vppAccountId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSmVppAccounts"></a>
# **getOrganizationSmVppAccounts**
> Object getOrganizationSmVppAccounts(organizationId)

List the VPP accounts in the organization

List the VPP accounts in the organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSmVppAccounts(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizationSnmp"></a>
# **getOrganizationSnmp**
> Object getOrganizationSnmp(organizationId)

Return the SNMP settings for an organization

Return the SNMP settings for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 

apiInstance.getOrganizationSnmp(organizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrganizations"></a>
# **getOrganizations**
> Object getOrganizations()

List the organizations that the user has privileges on

List the organizations that the user has privileges on

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
apiInstance.getOrganizations((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="moveOrganizationLicenses"></a>
# **moveOrganizationLicenses**
> Object moveOrganizationLicenses(bodyorganizationId)

Move licenses to another organization. This will also move any devices that the licenses are assigned to

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body140(); // Body140 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.moveOrganizationLicenses(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body140**](Body140.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveOrganizationLicensesSeats"></a>
# **moveOrganizationLicensesSeats**
> Object moveOrganizationLicensesSeats(bodyorganizationId)

Move SM seats to another organization

Move SM seats to another organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body141(); // Body141 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.moveOrganizationLicensesSeats(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body141**](Body141.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="provisionNetworkClients"></a>
# **provisionNetworkClients**
> Object provisionNetworkClients(bodynetworkId)

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body54(); // Body54 | 
let networkId = "networkId_example"; // String | 

apiInstance.provisionNetworkClients(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body54**](Body54.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refreshNetworkSmDeviceDetails"></a>
# **refreshNetworkSmDeviceDetails**
> refreshNetworkSmDeviceDetails(networkId, deviceId)

Refresh the details of a device

Refresh the details of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.refreshNetworkSmDeviceDetails(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="removeNetworkDevices"></a>
# **removeNetworkDevices**
> removeNetworkDevices(bodynetworkId)

Remove a single device

Remove a single device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body58(); // Body58 | 
let networkId = "networkId_example"; // String | 

apiInstance.removeNetworkDevices(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body58**](Body58.md)|  | 
 **networkId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="removeNetworkSwitchStack"></a>
# **removeNetworkSwitchStack**
> Object removeNetworkSwitchStack(bodynetworkIdswitchStackId)

Remove a switch from a stack

Remove a switch from a stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body95(); // Body95 | 
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 

apiInstance.removeNetworkSwitchStack(bodynetworkIdswitchStackId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body95**](Body95.md)|  | 
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renewOrganizationLicensesSeats"></a>
# **renewOrganizationLicensesSeats**
> Object renewOrganizationLicensesSeats(bodyorganizationId)

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body142(); // Body142 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.renewOrganizationLicensesSeats(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body142**](Body142.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="splitNetwork"></a>
# **splitNetwork**
> Object splitNetwork(networkId)

Split a combined network into individual networks for each type of device

Split a combined network into individual networks for each type of device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.splitNetwork(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="swapNetworkApplianceWarmSpare"></a>
# **swapNetworkApplianceWarmSpare**
> Object swapNetworkApplianceWarmSpare(networkId)

Swap MX primary and warm spare appliances

Swap MX primary and warm spare appliances

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.swapNetworkApplianceWarmSpare(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="unbindNetwork"></a>
# **unbindNetwork**
> Object unbindNetwork(networkId)

Unbind a network from a template.

Unbind a network from a template.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 

apiInstance.unbindNetwork(networkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="unenrollNetworkSmDevice"></a>
# **unenrollNetworkSmDevice**
> Object unenrollNetworkSmDevice(networkId, deviceId)

Unenroll a device

Unenroll a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.unenrollNetworkSmDevice(networkId, deviceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDevice"></a>
# **updateDevice**
> Object updateDevice(serial, opts)

Update the attributes of a device

Update the attributes of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body() // Body | 
};
apiInstance.updateDevice(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body**](Body.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCameraQualityAndRetention"></a>
# **updateDeviceCameraQualityAndRetention**
> Object updateDeviceCameraQualityAndRetention(serial, opts)

Update quality and retention settings for the given camera

Update quality and retention settings for the given camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body3() // Body3 | 
};
apiInstance.updateDeviceCameraQualityAndRetention(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body3**](Body3.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCameraSense"></a>
# **updateDeviceCameraSense**
> Object updateDeviceCameraSense(serial, opts)

Update sense settings for the given camera

Update sense settings for the given camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body4() // Body4 | 
};
apiInstance.updateDeviceCameraSense(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body4**](Body4.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCameraVideoSettings"></a>
# **updateDeviceCameraVideoSettings**
> Object updateDeviceCameraVideoSettings(serial, opts)

Update video settings for the given camera

Update video settings for the given camera

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body5() // Body5 | 
};
apiInstance.updateDeviceCameraVideoSettings(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body5**](Body5.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCellularGatewayLan"></a>
# **updateDeviceCellularGatewayLan**
> Object updateDeviceCellularGatewayLan(serial, opts)

Update the LAN Settings for a single MG.

Update the LAN Settings for a single MG.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body6() // Body6 | 
};
apiInstance.updateDeviceCellularGatewayLan(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body6**](Body6.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCellularGatewayPortForwardingRules"></a>
# **updateDeviceCellularGatewayPortForwardingRules**
> Object updateDeviceCellularGatewayPortForwardingRules(serial, opts)

Updates the port forwarding rules for a single MG.

Updates the port forwarding rules for a single MG.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body7() // Body7 | 
};
apiInstance.updateDeviceCellularGatewayPortForwardingRules(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body7**](Body7.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceManagementInterface"></a>
# **updateDeviceManagementInterface**
> Object updateDeviceManagementInterface(serial, opts)

Update the management interface settings for a device

Update the management interface settings for a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body8() // Body8 | 
};
apiInstance.updateDeviceManagementInterface(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body8**](Body8.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchPort"></a>
# **updateDeviceSwitchPort**
> Object updateDeviceSwitchPort(serialportId, opts)

Update a switch port

Update a switch port

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let portId = "portId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body10() // Body10 | 
};
apiInstance.updateDeviceSwitchPort(serialportId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **portId** | **String**|  | 
 **body** | [**Body10**](Body10.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchRoutingInterface"></a>
# **updateDeviceSwitchRoutingInterface**
> Object updateDeviceSwitchRoutingInterface(serialinterfaceId, opts)

Update a layer 3 interface for a switch

Update a layer 3 interface for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body12() // Body12 | 
};
apiInstance.updateDeviceSwitchRoutingInterface(serialinterfaceId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 
 **body** | [**Body12**](Body12.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchRoutingInterfaceDhcp"></a>
# **updateDeviceSwitchRoutingInterfaceDhcp**
> Object updateDeviceSwitchRoutingInterfaceDhcp(serialinterfaceId, opts)

Update a layer 3 interface DHCP configuration for a switch

Update a layer 3 interface DHCP configuration for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body13() // Body13 | 
};
apiInstance.updateDeviceSwitchRoutingInterfaceDhcp(serialinterfaceId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **interfaceId** | **String**|  | 
 **body** | [**Body13**](Body13.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchRoutingStaticRoute"></a>
# **updateDeviceSwitchRoutingStaticRoute**
> Object updateDeviceSwitchRoutingStaticRoute(serialstaticRouteId, opts)

Update a layer 3 static route for a switch

Update a layer 3 static route for a switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body15() // Body15 | 
};
apiInstance.updateDeviceSwitchRoutingStaticRoute(serialstaticRouteId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **staticRouteId** | **String**|  | 
 **body** | [**Body15**](Body15.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceSwitchWarmSpare"></a>
# **updateDeviceSwitchWarmSpare**
> Object updateDeviceSwitchWarmSpare(bodyserial)

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body16(); // Body16 | 
let serial = "serial_example"; // String | 

apiInstance.updateDeviceSwitchWarmSpare(bodyserial, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body16**](Body16.md)|  | 
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceWirelessBluetoothSettings"></a>
# **updateDeviceWirelessBluetoothSettings**
> Object updateDeviceWirelessBluetoothSettings(serial, opts)

Update the bluetooth settings for a wireless device

Update the bluetooth settings for a wireless device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body17() // Body17 | 
};
apiInstance.updateDeviceWirelessBluetoothSettings(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body17**](Body17.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceWirelessRadioSettings"></a>
# **updateDeviceWirelessRadioSettings**
> Object updateDeviceWirelessRadioSettings(serial, opts)

Update the radio settings of a device

Update the radio settings of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let serial = "serial_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body18() // Body18 | 
};
apiInstance.updateDeviceWirelessRadioSettings(serial, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **body** | [**Body18**](Body18.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetwork"></a>
# **updateNetwork**
> Object updateNetwork(networkId, opts)

Update a network

Update a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body19() // Body19 | 
};
apiInstance.updateNetwork(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body19**](Body19.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkAlertsSettings"></a>
# **updateNetworkAlertsSettings**
> Object updateNetworkAlertsSettings(networkId, opts)

Update the alert configuration for this network

Update the alert configuration for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body20() // Body20 | 
};
apiInstance.updateNetworkAlertsSettings(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body20**](Body20.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceConnectivityMonitoringDestinations"></a>
# **updateNetworkApplianceConnectivityMonitoringDestinations**
> Object updateNetworkApplianceConnectivityMonitoringDestinations(networkId, opts)

Update the connectivity testing destinations for an MX network

Update the connectivity testing destinations for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body21() // Body21 | 
};
apiInstance.updateNetworkApplianceConnectivityMonitoringDestinations(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body21**](Body21.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceContentFiltering"></a>
# **updateNetworkApplianceContentFiltering**
> Object updateNetworkApplianceContentFiltering(networkId, opts)

Update the content filtering settings for an MX network

Update the content filtering settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body22() // Body22 | 
};
apiInstance.updateNetworkApplianceContentFiltering(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body22**](Body22.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallCellularFirewallRules"></a>
# **updateNetworkApplianceFirewallCellularFirewallRules**
> Object updateNetworkApplianceFirewallCellularFirewallRules(networkId, opts)

Update the cellular firewall rules of an MX network

Update the cellular firewall rules of an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body23() // Body23 | 
};
apiInstance.updateNetworkApplianceFirewallCellularFirewallRules(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body23**](Body23.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallFirewalledService"></a>
# **updateNetworkApplianceFirewallFirewalledService**
> Object updateNetworkApplianceFirewallFirewalledService(bodynetworkIdservice)

Updates the accessibility settings for the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

Updates the accessibility settings for the given service (&#x27;ICMP&#x27;, &#x27;web&#x27;, or &#x27;SNMP&#x27;)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body24(); // Body24 | 
let networkId = "networkId_example"; // String | 
let service = "service_example"; // String | 

apiInstance.updateNetworkApplianceFirewallFirewalledService(bodynetworkIdservice, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body24**](Body24.md)|  | 
 **networkId** | **String**|  | 
 **service** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallInboundFirewallRules"></a>
# **updateNetworkApplianceFirewallInboundFirewallRules**
> Object updateNetworkApplianceFirewallInboundFirewallRules(networkId, opts)

Update the inbound firewall rules of an MX network

Update the inbound firewall rules of an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body25() // Body25 | 
};
apiInstance.updateNetworkApplianceFirewallInboundFirewallRules(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body25**](Body25.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallL3FirewallRules"></a>
# **updateNetworkApplianceFirewallL3FirewallRules**
> Object updateNetworkApplianceFirewallL3FirewallRules(networkId, opts)

Update the L3 firewall rules of an MX network

Update the L3 firewall rules of an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body26() // Body26 | 
};
apiInstance.updateNetworkApplianceFirewallL3FirewallRules(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body26**](Body26.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallL7FirewallRules"></a>
# **updateNetworkApplianceFirewallL7FirewallRules**
> Object updateNetworkApplianceFirewallL7FirewallRules(networkId, opts)

Update the MX L7 firewall rules for an MX network

Update the MX L7 firewall rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body27() // Body27 | 
};
apiInstance.updateNetworkApplianceFirewallL7FirewallRules(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body27**](Body27.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallOneToManyNatRules"></a>
# **updateNetworkApplianceFirewallOneToManyNatRules**
> Object updateNetworkApplianceFirewallOneToManyNatRules(bodynetworkId)

Set the 1:Many NAT mapping rules for an MX network

Set the 1:Many NAT mapping rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body28(); // Body28 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceFirewallOneToManyNatRules(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body28**](Body28.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallOneToOneNatRules"></a>
# **updateNetworkApplianceFirewallOneToOneNatRules**
> Object updateNetworkApplianceFirewallOneToOneNatRules(bodynetworkId)

Set the 1:1 NAT mapping rules for an MX network

Set the 1:1 NAT mapping rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body29(); // Body29 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceFirewallOneToOneNatRules(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body29**](Body29.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceFirewallPortForwardingRules"></a>
# **updateNetworkApplianceFirewallPortForwardingRules**
> Object updateNetworkApplianceFirewallPortForwardingRules(bodynetworkId)

Update the port forwarding rules for an MX network

Update the port forwarding rules for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body30(); // Body30 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceFirewallPortForwardingRules(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body30**](Body30.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkAppliancePort"></a>
# **updateNetworkAppliancePort**
> Object updateNetworkAppliancePort(networkIdportId, opts)

Update the per-port VLAN settings for a single MX port.

Update the per-port VLAN settings for a single MX port.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let portId = "portId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body31() // Body31 | 
};
apiInstance.updateNetworkAppliancePort(networkIdportId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portId** | **String**|  | 
 **body** | [**Body31**](Body31.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceSecurityIntrusion"></a>
# **updateNetworkApplianceSecurityIntrusion**
> Object updateNetworkApplianceSecurityIntrusion(networkId, opts)

Set the supported intrusion settings for an MX network

Set the supported intrusion settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body32() // Body32 | 
};
apiInstance.updateNetworkApplianceSecurityIntrusion(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body32**](Body32.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceSecurityMalware"></a>
# **updateNetworkApplianceSecurityMalware**
> Object updateNetworkApplianceSecurityMalware(bodynetworkId)

Set the supported malware settings for an MX network

Set the supported malware settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body33(); // Body33 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceSecurityMalware(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body33**](Body33.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceSingleLan"></a>
# **updateNetworkApplianceSingleLan**
> Object updateNetworkApplianceSingleLan(networkId, opts)

Update single LAN configuration

Update single LAN configuration

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body34() // Body34 | 
};
apiInstance.updateNetworkApplianceSingleLan(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body34**](Body34.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceStaticRoute"></a>
# **updateNetworkApplianceStaticRoute**
> Object updateNetworkApplianceStaticRoute(networkIdstaticRouteId, opts)

Update a static route for an MX or teleworker network

Update a static route for an MX or teleworker network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body36() // Body36 | 
};
apiInstance.updateNetworkApplianceStaticRoute(networkIdstaticRouteId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **staticRouteId** | **String**|  | 
 **body** | [**Body36**](Body36.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceTrafficShapingCustomPerformanceClass"></a>
# **updateNetworkApplianceTrafficShapingCustomPerformanceClass**
> Object updateNetworkApplianceTrafficShapingCustomPerformanceClass(networkIdcustomPerformanceClassId, opts)

Update a custom performance class for an MX network

Update a custom performance class for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let customPerformanceClassId = "customPerformanceClassId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body38() // Body38 | 
};
apiInstance.updateNetworkApplianceTrafficShapingCustomPerformanceClass(networkIdcustomPerformanceClassId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **customPerformanceClassId** | **String**|  | 
 **body** | [**Body38**](Body38.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceTrafficShapingRules"></a>
# **updateNetworkApplianceTrafficShapingRules**
> Object updateNetworkApplianceTrafficShapingRules(networkId, opts)

Update the traffic shaping settings for an MX network

Update the traffic shaping settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body39() // Body39 | 
};
apiInstance.updateNetworkApplianceTrafficShapingRules(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body39**](Body39.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceTrafficShapingUplinkBandwidth"></a>
# **updateNetworkApplianceTrafficShapingUplinkBandwidth**
> Object updateNetworkApplianceTrafficShapingUplinkBandwidth(networkId, opts)

Updates the uplink bandwidth settings for your MX network.

Updates the uplink bandwidth settings for your MX network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body40() // Body40 | 
};
apiInstance.updateNetworkApplianceTrafficShapingUplinkBandwidth(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body40**](Body40.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceTrafficShapingUplinkSelection"></a>
# **updateNetworkApplianceTrafficShapingUplinkSelection**
> Object updateNetworkApplianceTrafficShapingUplinkSelection(networkId, opts)

Update uplink selection settings for an MX network

Update uplink selection settings for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body41() // Body41 | 
};
apiInstance.updateNetworkApplianceTrafficShapingUplinkSelection(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body41**](Body41.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceVlan"></a>
# **updateNetworkApplianceVlan**
> Object updateNetworkApplianceVlan(networkIdvlanId, opts)

Update a VLAN

Update a VLAN

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let vlanId = "vlanId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body44() // Body44 | 
};
apiInstance.updateNetworkApplianceVlan(networkIdvlanId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **vlanId** | **String**|  | 
 **body** | [**Body44**](Body44.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceVlansSettings"></a>
# **updateNetworkApplianceVlansSettings**
> Object updateNetworkApplianceVlansSettings(networkId, opts)

Enable/Disable VLANs for the given network

Enable/Disable VLANs for the given network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body43() // Body43 | 
};
apiInstance.updateNetworkApplianceVlansSettings(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body43**](Body43.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceVpnSiteToSiteVpn"></a>
# **updateNetworkApplianceVpnSiteToSiteVpn**
> Object updateNetworkApplianceVpnSiteToSiteVpn(bodynetworkId)

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body45(); // Body45 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceVpnSiteToSiteVpn(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body45**](Body45.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceWarmSpare"></a>
# **updateNetworkApplianceWarmSpare**
> Object updateNetworkApplianceWarmSpare(bodynetworkId)

Update MX warm spare settings

Update MX warm spare settings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body46(); // Body46 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceWarmSpare(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body46**](Body46.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkCameraQualityRetentionProfile"></a>
# **updateNetworkCameraQualityRetentionProfile**
> Object updateNetworkCameraQualityRetentionProfile(networkIdqualityRetentionProfileId, opts)

Update an existing quality retention profile for this network.

Update an existing quality retention profile for this network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let qualityRetentionProfileId = "qualityRetentionProfileId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body49() // Body49 | 
};
apiInstance.updateNetworkCameraQualityRetentionProfile(networkIdqualityRetentionProfileId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qualityRetentionProfileId** | **String**|  | 
 **body** | [**Body49**](Body49.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkCellularGatewayConnectivityMonitoringDestinations"></a>
# **updateNetworkCellularGatewayConnectivityMonitoringDestinations**
> Object updateNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, opts)

Update the connectivity testing destinations for an MG network

Update the connectivity testing destinations for an MG network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body50() // Body50 | 
};
apiInstance.updateNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body50**](Body50.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkCellularGatewayDhcp"></a>
# **updateNetworkCellularGatewayDhcp**
> Object updateNetworkCellularGatewayDhcp(networkId, opts)

Update common DHCP settings of MGs

Update common DHCP settings of MGs

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body51() // Body51 | 
};
apiInstance.updateNetworkCellularGatewayDhcp(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body51**](Body51.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkCellularGatewaySubnetPool"></a>
# **updateNetworkCellularGatewaySubnetPool**
> Object updateNetworkCellularGatewaySubnetPool(networkId, opts)

Update the subnet pool and mask configuration for MGs in the network.

Update the subnet pool and mask configuration for MGs in the network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body52() // Body52 | 
};
apiInstance.updateNetworkCellularGatewaySubnetPool(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body52**](Body52.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkCellularGatewayUplink"></a>
# **updateNetworkCellularGatewayUplink**
> Object updateNetworkCellularGatewayUplink(networkId, opts)

Updates the uplink settings for your MG network.

Updates the uplink settings for your MG network.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body53() // Body53 | 
};
apiInstance.updateNetworkCellularGatewayUplink(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body53**](Body53.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkClientPolicy"></a>
# **updateNetworkClientPolicy**
> Object updateNetworkClientPolicy(bodynetworkIdclientId)

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body55(); // Body55 | 
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.updateNetworkClientPolicy(bodynetworkIdclientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body55**](Body55.md)|  | 
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkClientSplashAuthorizationStatus"></a>
# **updateNetworkClientSplashAuthorizationStatus**
> Object updateNetworkClientSplashAuthorizationStatus(bodynetworkIdclientId)

Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body56(); // Body56 | 
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.updateNetworkClientSplashAuthorizationStatus(bodynetworkIdclientId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body56**](Body56.md)|  | 
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkFirmwareUpgrades"></a>
# **updateNetworkFirmwareUpgrades**
> Object updateNetworkFirmwareUpgrades(networkId, opts)

Update current maintenance window for a network

Update current maintenance window for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body59() // Body59 | 
};
apiInstance.updateNetworkFirmwareUpgrades(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body59**](Body59.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkFloorPlan"></a>
# **updateNetworkFloorPlan**
> Object updateNetworkFloorPlan(networkIdfloorPlanId, opts)

Update a floor plan&#x27;s geolocation and other meta data

Update a floor plan&#x27;s geolocation and other meta data

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let floorPlanId = "floorPlanId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body61() // Body61 | 
};
apiInstance.updateNetworkFloorPlan(networkIdfloorPlanId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 
 **body** | [**Body61**](Body61.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkGroupPolicy"></a>
# **updateNetworkGroupPolicy**
> Object updateNetworkGroupPolicy(networkIdgroupPolicyId, opts)

Update a group policy

Update a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body63() // Body63 | 
};
apiInstance.updateNetworkGroupPolicy(networkIdgroupPolicyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 
 **body** | [**Body63**](Body63.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkMerakiAuthUser"></a>
# **updateNetworkMerakiAuthUser**
> Object updateNetworkMerakiAuthUser(networkIdmerakiAuthUserId, opts)

Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)

Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let merakiAuthUserId = "merakiAuthUserId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body65() // Body65 | 
};
apiInstance.updateNetworkMerakiAuthUser(networkIdmerakiAuthUserId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 
 **body** | [**Body65**](Body65.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkMqttBroker"></a>
# **updateNetworkMqttBroker**
> Object updateNetworkMqttBroker(networkIdmqttBrokerId, opts)

Update an MQTT broker

Update an MQTT broker

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let mqttBrokerId = "mqttBrokerId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body67() // Body67 | 
};
apiInstance.updateNetworkMqttBroker(networkIdmqttBrokerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **mqttBrokerId** | **String**|  | 
 **body** | [**Body67**](Body67.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkNetflow"></a>
# **updateNetworkNetflow**
> Object updateNetworkNetflow(networkId, opts)

Update the NetFlow traffic reporting settings for a network

Update the NetFlow traffic reporting settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body68() // Body68 | 
};
apiInstance.updateNetworkNetflow(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body68**](Body68.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSettings"></a>
# **updateNetworkSettings**
> Object updateNetworkSettings(networkId, opts)

Update the settings for a network

Update the settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body70() // Body70 | 
};
apiInstance.updateNetworkSettings(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body70**](Body70.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSmDevicesFields"></a>
# **updateNetworkSmDevicesFields**
> Object updateNetworkSmDevicesFields(bodynetworkId)

Modify the fields of a device

Modify the fields of a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body72(); // Body72 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSmDevicesFields(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body72**](Body72.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSmTargetGroup"></a>
# **updateNetworkSmTargetGroup**
> Object updateNetworkSmTargetGroup(networkIdtargetGroupId, opts)

Update a target group

Update a target group

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let targetGroupId = "targetGroupId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body75() // Body75 | 
};
apiInstance.updateNetworkSmTargetGroup(networkIdtargetGroupId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **targetGroupId** | **String**|  | 
 **body** | [**Body75**](Body75.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSnmp"></a>
# **updateNetworkSnmp**
> Object updateNetworkSnmp(networkId, opts)

Update the SNMP settings for a network

Update the SNMP settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body76() // Body76 | 
};
apiInstance.updateNetworkSnmp(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body76**](Body76.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchAccessControlLists"></a>
# **updateNetworkSwitchAccessControlLists**
> Object updateNetworkSwitchAccessControlLists(bodynetworkId)

Update the access control lists for a MS network

Update the access control lists for a MS network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body77(); // Body77 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSwitchAccessControlLists(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body77**](Body77.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchDhcpServerPolicy"></a>
# **updateNetworkSwitchDhcpServerPolicy**
> Object updateNetworkSwitchDhcpServerPolicy(networkId, opts)

Update the DHCP server policy

Update the DHCP server policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body78() // Body78 | 
};
apiInstance.updateNetworkSwitchDhcpServerPolicy(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body78**](Body78.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchDscpToCosMappings"></a>
# **updateNetworkSwitchDscpToCosMappings**
> Object updateNetworkSwitchDscpToCosMappings(bodynetworkId)

Update the DSCP to CoS mappings

Update the DSCP to CoS mappings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body79(); // Body79 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSwitchDscpToCosMappings(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body79**](Body79.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchLinkAggregation"></a>
# **updateNetworkSwitchLinkAggregation**
> Object updateNetworkSwitchLinkAggregation(networkIdlinkAggregationId, opts)

Update a link aggregation group

Update a link aggregation group

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let linkAggregationId = "linkAggregationId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body81() // Body81 | 
};
apiInstance.updateNetworkSwitchLinkAggregation(networkIdlinkAggregationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **linkAggregationId** | **String**|  | 
 **body** | [**Body81**](Body81.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchMtu"></a>
# **updateNetworkSwitchMtu**
> Object updateNetworkSwitchMtu(networkId, opts)

Update the MTU configuration

Update the MTU configuration

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body82() // Body82 | 
};
apiInstance.updateNetworkSwitchMtu(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body82**](Body82.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchPortSchedule"></a>
# **updateNetworkSwitchPortSchedule**
> Object updateNetworkSwitchPortSchedule(networkIdportScheduleId, opts)

Update a switch port schedule

Update a switch port schedule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let portScheduleId = "portScheduleId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body84() // Body84 | 
};
apiInstance.updateNetworkSwitchPortSchedule(networkIdportScheduleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portScheduleId** | **String**|  | 
 **body** | [**Body84**](Body84.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchQosRule"></a>
# **updateNetworkSwitchQosRule**
> Object updateNetworkSwitchQosRule(networkIdqosRuleId, opts)

Update a quality of service rule

Update a quality of service rule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let qosRuleId = "qosRuleId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body87() // Body87 | 
};
apiInstance.updateNetworkSwitchQosRule(networkIdqosRuleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 
 **body** | [**Body87**](Body87.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchQosRulesOrder"></a>
# **updateNetworkSwitchQosRulesOrder**
> Object updateNetworkSwitchQosRulesOrder(bodynetworkId)

Update the order in which the rules should be processed by the switch

Update the order in which the rules should be processed by the switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body86(); // Body86 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSwitchQosRulesOrder(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body86**](Body86.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchRoutingMulticast"></a>
# **updateNetworkSwitchRoutingMulticast**
> Object updateNetworkSwitchRoutingMulticast(networkId, opts)

Update multicast settings for a network

Update multicast settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body88() // Body88 | 
};
apiInstance.updateNetworkSwitchRoutingMulticast(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body88**](Body88.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchRoutingMulticastRendezvousPoint"></a>
# **updateNetworkSwitchRoutingMulticastRendezvousPoint**
> Object updateNetworkSwitchRoutingMulticastRendezvousPoint(bodynetworkIdrendezvousPointId)

Update a multicast rendezvous point

Update a multicast rendezvous point

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body90(); // Body90 | 
let networkId = "networkId_example"; // String | 
let rendezvousPointId = "rendezvousPointId_example"; // String | 

apiInstance.updateNetworkSwitchRoutingMulticastRendezvousPoint(bodynetworkIdrendezvousPointId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body90**](Body90.md)|  | 
 **networkId** | **String**|  | 
 **rendezvousPointId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchRoutingOspf"></a>
# **updateNetworkSwitchRoutingOspf**
> Object updateNetworkSwitchRoutingOspf(networkId, opts)

Update layer 3 OSPF routing configuration

Update layer 3 OSPF routing configuration

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body91() // Body91 | 
};
apiInstance.updateNetworkSwitchRoutingOspf(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body91**](Body91.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchSettings"></a>
# **updateNetworkSwitchSettings**
> Object updateNetworkSwitchSettings(networkId, opts)

Update switch network settings

Update switch network settings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body92() // Body92 | 
};
apiInstance.updateNetworkSwitchSettings(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body92**](Body92.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStackRoutingInterface"></a>
# **updateNetworkSwitchStackRoutingInterface**
> Object updateNetworkSwitchStackRoutingInterface(networkIdswitchStackIdinterfaceId, opts)

Update a layer 3 interface for a switch stack

Update a layer 3 interface for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body97() // Body97 | 
};
apiInstance.updateNetworkSwitchStackRoutingInterface(networkIdswitchStackIdinterfaceId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 
 **body** | [**Body97**](Body97.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStackRoutingInterfaceDhcp"></a>
# **updateNetworkSwitchStackRoutingInterfaceDhcp**
> Object updateNetworkSwitchStackRoutingInterfaceDhcp(networkIdswitchStackIdinterfaceId, opts)

Update a layer 3 interface DHCP configuration for a switch stack

Update a layer 3 interface DHCP configuration for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 
let interfaceId = "interfaceId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body98() // Body98 | 
};
apiInstance.updateNetworkSwitchStackRoutingInterfaceDhcp(networkIdswitchStackIdinterfaceId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **interfaceId** | **String**|  | 
 **body** | [**Body98**](Body98.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStackRoutingStaticRoute"></a>
# **updateNetworkSwitchStackRoutingStaticRoute**
> Object updateNetworkSwitchStackRoutingStaticRoute(networkIdswitchStackIdstaticRouteId, opts)

Update a layer 3 static route for a switch stack

Update a layer 3 static route for a switch stack

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let switchStackId = "switchStackId_example"; // String | 
let staticRouteId = "staticRouteId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body100() // Body100 | 
};
apiInstance.updateNetworkSwitchStackRoutingStaticRoute(networkIdswitchStackIdstaticRouteId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **switchStackId** | **String**|  | 
 **staticRouteId** | **String**|  | 
 **body** | [**Body100**](Body100.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStormControl"></a>
# **updateNetworkSwitchStormControl**
> Object updateNetworkSwitchStormControl(networkId, opts)

Update the storm control configuration for a switch network

Update the storm control configuration for a switch network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body101() // Body101 | 
};
apiInstance.updateNetworkSwitchStormControl(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body101**](Body101.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchStp"></a>
# **updateNetworkSwitchStp**
> Object updateNetworkSwitchStp(networkId, opts)

Updates STP settings

Updates STP settings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body102() // Body102 | 
};
apiInstance.updateNetworkSwitchStp(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body102**](Body102.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSyslogServers"></a>
# **updateNetworkSyslogServers**
> Object updateNetworkSyslogServers(bodynetworkId)

Update the syslog servers for a network

Update the syslog servers for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body103(); // Body103 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSyslogServers(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body103**](Body103.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkTrafficAnalysis"></a>
# **updateNetworkTrafficAnalysis**
> Object updateNetworkTrafficAnalysis(networkId, opts)

Update the traffic analysis settings for a network

Update the traffic analysis settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body104() // Body104 | 
};
apiInstance.updateNetworkTrafficAnalysis(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body104**](Body104.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWebhooksHttpServer"></a>
# **updateNetworkWebhooksHttpServer**
> Object updateNetworkWebhooksHttpServer(networkIdhttpServerId, opts)

Update an HTTP server

Update an HTTP server

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let httpServerId = "httpServerId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body106() // Body106 | 
};
apiInstance.updateNetworkWebhooksHttpServer(networkIdhttpServerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **httpServerId** | **String**|  | 
 **body** | [**Body106**](Body106.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessAlternateManagementInterface"></a>
# **updateNetworkWirelessAlternateManagementInterface**
> Object updateNetworkWirelessAlternateManagementInterface(networkId, opts)

Update alternate management interface and device static IP

Update alternate management interface and device static IP

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body108() // Body108 | 
};
apiInstance.updateNetworkWirelessAlternateManagementInterface(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body108**](Body108.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessBluetoothSettings"></a>
# **updateNetworkWirelessBluetoothSettings**
> Object updateNetworkWirelessBluetoothSettings(networkId, opts)

Update the Bluetooth settings for a network. See the docs page for &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt;.

Update the Bluetooth settings for a network. See the docs page for &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt;.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body109() // Body109 | 
};
apiInstance.updateNetworkWirelessBluetoothSettings(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body109**](Body109.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessRfProfile"></a>
# **updateNetworkWirelessRfProfile**
> Object updateNetworkWirelessRfProfile(networkIdrfProfileId, opts)

Updates specified RF profile for this network

Updates specified RF profile for this network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let rfProfileId = "rfProfileId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body111() // Body111 | 
};
apiInstance.updateNetworkWirelessRfProfile(networkIdrfProfileId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **rfProfileId** | **String**|  | 
 **body** | [**Body111**](Body111.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSettings"></a>
# **updateNetworkWirelessSettings**
> Object updateNetworkWirelessSettings(networkId, opts)

Update the wireless settings for a network

Update the wireless settings for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body112() // Body112 | 
};
apiInstance.updateNetworkWirelessSettings(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body112**](Body112.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsid"></a>
# **updateNetworkWirelessSsid**
> Object updateNetworkWirelessSsid(networkId_number, opts)

Update the attributes of an MR SSID

Update the attributes of an MR SSID

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body113() // Body113 | 
};
apiInstance.updateNetworkWirelessSsid(networkId_number, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **body** | [**Body113**](Body113.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidFirewallL3FirewallRules"></a>
# **updateNetworkWirelessSsidFirewallL3FirewallRules**
> Object updateNetworkWirelessSsidFirewallL3FirewallRules(networkId_number, opts)

Update the L3 firewall rules of an SSID on an MR network

Update the L3 firewall rules of an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body114() // Body114 | 
};
apiInstance.updateNetworkWirelessSsidFirewallL3FirewallRules(networkId_number, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **body** | [**Body114**](Body114.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidFirewallL7FirewallRules"></a>
# **updateNetworkWirelessSsidFirewallL7FirewallRules**
> Object updateNetworkWirelessSsidFirewallL7FirewallRules(networkId_number, opts)

Update the L7 firewall rules of an SSID on an MR network

Update the L7 firewall rules of an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body115() // Body115 | 
};
apiInstance.updateNetworkWirelessSsidFirewallL7FirewallRules(networkId_number, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **body** | [**Body115**](Body115.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidIdentityPsk"></a>
# **updateNetworkWirelessSsidIdentityPsk**
> Object updateNetworkWirelessSsidIdentityPsk(networkId_numberidentityPskId, opts)

Update an Identity PSK

Update an Identity PSK

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let identityPskId = "identityPskId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body117() // Body117 | 
};
apiInstance.updateNetworkWirelessSsidIdentityPsk(networkId_numberidentityPskId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **identityPskId** | **String**|  | 
 **body** | [**Body117**](Body117.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidSplashSettings"></a>
# **updateNetworkWirelessSsidSplashSettings**
> Object updateNetworkWirelessSsidSplashSettings(networkId_number, opts)

Modify the splash page settings for the given SSID

Modify the splash page settings for the given SSID

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body118() // Body118 | 
};
apiInstance.updateNetworkWirelessSsidSplashSettings(networkId_number, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **body** | [**Body118**](Body118.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidTrafficShapingRules"></a>
# **updateNetworkWirelessSsidTrafficShapingRules**
> Object updateNetworkWirelessSsidTrafficShapingRules(networkId_number, opts)

Update the traffic shaping settings for an SSID on an MR network

Update the traffic shaping settings for an SSID on an MR network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let _number = "_number_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body119() // Body119 | 
};
apiInstance.updateNetworkWirelessSsidTrafficShapingRules(networkId_number, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **body** | [**Body119**](Body119.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganization"></a>
# **updateOrganization**
> Object updateOrganization(organizationId, opts)

Update an organization

Update an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body121() // Body121 | 
};
apiInstance.updateOrganization(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **body** | [**Body121**](Body121.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationActionBatch"></a>
# **updateOrganizationActionBatch**
> Object updateOrganizationActionBatch(organizationIdactionBatchId, opts)

Update an action batch

Update an action batch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let actionBatchId = "actionBatchId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body123() // Body123 | 
};
apiInstance.updateOrganizationActionBatch(organizationIdactionBatchId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **actionBatchId** | **String**|  | 
 **body** | [**Body123**](Body123.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationAdmin"></a>
# **updateOrganizationAdmin**
> Object updateOrganizationAdmin(organizationIdadminId, opts)

Update an administrator

Update an administrator

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let adminId = "adminId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body125() // Body125 | 
};
apiInstance.updateOrganizationAdmin(organizationIdadminId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **adminId** | **String**|  | 
 **body** | [**Body125**](Body125.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationApplianceSecurityIntrusion"></a>
# **updateOrganizationApplianceSecurityIntrusion**
> Object updateOrganizationApplianceSecurityIntrusion(bodyorganizationId)

Sets supported intrusion settings for an organization

Sets supported intrusion settings for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body126(); // Body126 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.updateOrganizationApplianceSecurityIntrusion(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body126**](Body126.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationApplianceVpnThirdPartyVPNPeers"></a>
# **updateOrganizationApplianceVpnThirdPartyVPNPeers**
> Object updateOrganizationApplianceVpnThirdPartyVPNPeers(bodyorganizationId)

Update the third party VPN peers for an organization

Update the third party VPN peers for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body127(); // Body127 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.updateOrganizationApplianceVpnThirdPartyVPNPeers(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body127**](Body127.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationApplianceVpnVpnFirewallRules"></a>
# **updateOrganizationApplianceVpnVpnFirewallRules**
> Object updateOrganizationApplianceVpnVpnFirewallRules(organizationId, opts)

Update the firewall rules of an organization&#x27;s site-to-site VPN

Update the firewall rules of an organization&#x27;s site-to-site VPN

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body128() // Body128 | 
};
apiInstance.updateOrganizationApplianceVpnVpnFirewallRules(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **body** | [**Body128**](Body128.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationBrandingPoliciesPriorities"></a>
# **updateOrganizationBrandingPoliciesPriorities**
> Object updateOrganizationBrandingPoliciesPriorities(bodyorganizationId)

Update the priority ordering of an organization&#x27;s branding policies.

Update the priority ordering of an organization&#x27;s branding policies.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let body = new MerakiDashboardApi.Body130(); // Body130 | 
let organizationId = "organizationId_example"; // String | 

apiInstance.updateOrganizationBrandingPoliciesPriorities(bodyorganizationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body130**](Body130.md)|  | 
 **organizationId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationBrandingPolicy"></a>
# **updateOrganizationBrandingPolicy**
> Object updateOrganizationBrandingPolicy(organizationIdbrandingPolicyId, opts)

Update a branding policy

Update a branding policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let brandingPolicyId = "brandingPolicyId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body131() // Body131 | 
};
apiInstance.updateOrganizationBrandingPolicy(organizationIdbrandingPolicyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **brandingPolicyId** | **String**|  | 
 **body** | [**Body131**](Body131.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationConfigTemplate"></a>
# **updateOrganizationConfigTemplate**
> Object updateOrganizationConfigTemplate(organizationIdconfigTemplateId, opts)

Update a configuration template

Update a configuration template

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body135() // Body135 | 
};
apiInstance.updateOrganizationConfigTemplate(organizationIdconfigTemplateId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **body** | [**Body135**](Body135.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationConfigTemplateSwitchProfilePort"></a>
# **updateOrganizationConfigTemplateSwitchProfilePort**
> Object updateOrganizationConfigTemplateSwitchProfilePort(organizationIdconfigTemplateIdprofileIdportId, opts)

Update a switch profile port

Update a switch profile port

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let configTemplateId = "configTemplateId_example"; // String | 
let profileId = "profileId_example"; // String | 
let portId = "portId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body136() // Body136 | 
};
apiInstance.updateOrganizationConfigTemplateSwitchProfilePort(organizationIdconfigTemplateIdprofileIdportId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **configTemplateId** | **String**|  | 
 **profileId** | **String**|  | 
 **portId** | **String**|  | 
 **body** | [**Body136**](Body136.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationInsightMonitoredMediaServer"></a>
# **updateOrganizationInsightMonitoredMediaServer**
> Object updateOrganizationInsightMonitoredMediaServer(organizationIdmonitoredMediaServerId, opts)

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let monitoredMediaServerId = "monitoredMediaServerId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body138() // Body138 | 
};
apiInstance.updateOrganizationInsightMonitoredMediaServer(organizationIdmonitoredMediaServerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **monitoredMediaServerId** | **String**|  | 
 **body** | [**Body138**](Body138.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationLicense"></a>
# **updateOrganizationLicense**
> Object updateOrganizationLicense(organizationIdlicenseId, opts)

Update a license

Update a license

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let licenseId = "licenseId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body143() // Body143 | 
};
apiInstance.updateOrganizationLicense(organizationIdlicenseId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **licenseId** | **String**|  | 
 **body** | [**Body143**](Body143.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationSaml"></a>
# **updateOrganizationSaml**
> Object updateOrganizationSaml(organizationId, opts)

Updates the SAML SSO enabled settings for an organization.

Updates the SAML SSO enabled settings for an organization.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body146() // Body146 | 
};
apiInstance.updateOrganizationSaml(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **body** | [**Body146**](Body146.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationSamlIdp"></a>
# **updateOrganizationSamlIdp**
> Object updateOrganizationSamlIdp(organizationIdidpId, opts)

Update a SAML IdP in your organization

Update a SAML IdP in your organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let idpId = "idpId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body148() // Body148 | 
};
apiInstance.updateOrganizationSamlIdp(organizationIdidpId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **idpId** | **String**|  | 
 **body** | [**Body148**](Body148.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationSamlRole"></a>
# **updateOrganizationSamlRole**
> Object updateOrganizationSamlRole(organizationIdsamlRoleId, opts)

Update a SAML role

Update a SAML role

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let samlRoleId = "samlRoleId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body150() // Body150 | 
};
apiInstance.updateOrganizationSamlRole(organizationIdsamlRoleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **samlRoleId** | **String**|  | 
 **body** | [**Body150**](Body150.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationSnmp"></a>
# **updateOrganizationSnmp**
> Object updateOrganizationSnmp(organizationId, opts)

Update the SNMP settings for an organization

Update the SNMP settings for an organization

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let organizationId = "organizationId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body151() // Body151 | 
};
apiInstance.updateOrganizationSnmp(organizationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **body** | [**Body151**](Body151.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="wipeNetworkSmDevices"></a>
# **wipeNetworkSmDevices**
> Object wipeNetworkSmDevices(networkId, opts)

Wipe a device

Wipe a device

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.ConfigureApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body73() // Body73 | 
};
apiInstance.wipeNetworkSmDevices(networkId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **body** | [**Body73**](Body73.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

