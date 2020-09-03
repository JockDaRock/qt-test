# MerakiDashboardApi.OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ikeCipherAlgo** | **[String]** | This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des' | [optional] 
**ikeAuthAlgo** | **[String]** | This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5' | [optional] 
**ikePrfAlgo** | **[String]** | [optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: 'prfsha256', 'prfsha1', 'prfmd5', 'default'. The 'default' option can be used to default to the Authentication algorithm. | [optional] 
**ikeDiffieHellmanGroup** | **[String]** | This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: 'group14', 'group5', 'group2', 'group1' | [optional] 
**ikeLifetime** | **Number** | The lifetime of the Phase 1 SA in seconds. | [optional] 
**childCipherAlgo** | **[String]** | This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null' | [optional] 
**childAuthAlgo** | **[String]** | This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5' | [optional] 
**childPfsGroup** | **[String]** | This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: 'disabled','group14', 'group5', 'group2', 'group1' | [optional] 
**childLifetime** | **Number** | The lifetime of the Phase 2 SA in seconds. | [optional] 


<a name="[IkePrfAlgoEnum]"></a>
## Enum: [IkePrfAlgoEnum]


* `prfsha256` (value: `"prfsha256"`)

* `prfsha1` (value: `"prfsha1"`)

* `prfmd5` (value: `"prfmd5"`)

* `_default` (value: `"default"`)




