// Auto-generated from CARC/RARC CSV files
const carcCodes = [
  {
    "code": "1",
    "desc": "Deductible Amount"
  },
  {
    "code": "2",
    "desc": "Coinsurance Amount"
  },
  {
    "code": "3",
    "desc": "Co-payment Amount"
  },
  {
    "code": "4",
    "desc": "The procedure code is inconsistent with the modifier used. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "5",
    "desc": "The procedure code/type of bill is inconsistent with the place of service. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "6",
    "desc": "The procedure/revenue code is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "7",
    "desc": "The procedure/revenue code is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "8",
    "desc": "The procedure code is inconsistent with the provider type/specialty (taxonomy). Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if pres..."
  },
  {
    "code": "9",
    "desc": "The diagnosis is inconsistent with the patient's age. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "10",
    "desc": "The diagnosis is inconsistent with the patient's gender. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "11",
    "desc": "The diagnosis is inconsistent with the procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "12",
    "desc": "The diagnosis is inconsistent with the provider type. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "13",
    "desc": "The date of death precedes the date of service."
  },
  {
    "code": "14",
    "desc": "The date of birth follows the date of service."
  },
  {
    "code": "15",
    "desc": "The procedure code is inconsistent with the modifier used or a required modifier is missing."
  },
  {
    "code": "16",
    "desc": "Claim/service lacks information or has submission/billing error(s). Usage: Do not use this code for claims attachment(s)/other documentation. At least one Remark Code must be provided (may be compr..."
  },
  {
    "code": "17",
    "desc": "Requested information was not provided or was insufficient/incomplete. At least one Remark Code must be provided (may be comprised of either the Remittance Advice Remark Code or NCPDP Reject Reason..."
  },
  {
    "code": "18",
    "desc": "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations requires CO)"
  },
  {
    "code": "19",
    "desc": "This is a work-related injury/illness and thus the liability of the Worker's Compensation Carrier."
  },
  {
    "code": "20",
    "desc": "This injury/illness is covered by the liability carrier."
  },
  {
    "code": "21",
    "desc": "This injury/illness is the liability of the no-fault carrier."
  },
  {
    "code": "22",
    "desc": "This care may be covered by another payer per coordination of benefits."
  },
  {
    "code": "23",
    "desc": "The impact of prior payer(s) adjudication including payments and/or adjustments. (Use only with Group Code OA)"
  },
  {
    "code": "24",
    "desc": "Charges are covered under a capitation agreement/managed care plan."
  },
  {
    "code": "25",
    "desc": "Payment denied. Your Stop loss deductible has not been met."
  },
  {
    "code": "26",
    "desc": "Expenses incurred prior to coverage."
  },
  {
    "code": "27",
    "desc": "Expenses incurred after coverage terminated."
  },
  {
    "code": "28",
    "desc": "Coverage not in effect at the time the service was provided."
  },
  {
    "code": "29",
    "desc": "The time limit for filing has expired."
  },
  {
    "code": "30",
    "desc": "Payment adjusted because the patient has not met the required eligibility, spend down, waiting, or residency requirements."
  },
  {
    "code": "31",
    "desc": "Patient cannot be identified as our insured."
  },
  {
    "code": "32",
    "desc": "Our records indicate the patient is not an eligible dependent."
  },
  {
    "code": "33",
    "desc": "Insured has no dependent coverage."
  },
  {
    "code": "34",
    "desc": "Insured has no coverage for newborns."
  },
  {
    "code": "35",
    "desc": "Lifetime benefit maximum has been reached."
  },
  {
    "code": "36",
    "desc": "Balance does not exceed co-payment amount."
  },
  {
    "code": "37",
    "desc": "Balance does not exceed deductible."
  },
  {
    "code": "38",
    "desc": "Services not provided or authorized by designated (network/primary care) providers."
  },
  {
    "code": "39",
    "desc": "Services denied at the time authorization/pre-certification was requested."
  },
  {
    "code": "40",
    "desc": "Charges do not meet qualifications for emergent/urgent care. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "41",
    "desc": "Discount agreed to in Preferred Provider contract."
  },
  {
    "code": "42",
    "desc": "Charges exceed our fee schedule or maximum allowable amount. (Use CARC 45)"
  },
  {
    "code": "43",
    "desc": "Gramm-Rudman reduction."
  },
  {
    "code": "44",
    "desc": "Prompt-pay discount."
  },
  {
    "code": "45",
    "desc": "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement. Usage: This adjustment amount cannot equal the total service or claim charge amount; and must not duplicate p..."
  },
  {
    "code": "46",
    "desc": "This (these) service(s) is (are) not covered."
  },
  {
    "code": "47",
    "desc": "This (these) diagnosis(es) is (are) not covered, missing, or are invalid."
  },
  {
    "code": "48",
    "desc": "This (these) procedure(s) is (are) not covered."
  },
  {
    "code": "49",
    "desc": "This is a non-covered service because it is a routine/preventive exam or a diagnostic/screening procedure done in conjunction with a routine/preventive exam. Usage: Refer to the 835 Healthcare Poli..."
  },
  {
    "code": "50",
    "desc": "These are non-covered services because this is not deemed a 'medical necessity' by the payer. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information..."
  },
  {
    "code": "51",
    "desc": "These are non-covered services because this is a pre-existing condition. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "52",
    "desc": "The referring/prescribing/rendering provider is not eligible to refer/prescribe/order/perform the service billed."
  },
  {
    "code": "53",
    "desc": "Services by an immediate relative or a member of the same household are not covered."
  },
  {
    "code": "54",
    "desc": "Multiple physicians/assistants are not covered in this case. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "55",
    "desc": "Procedure/treatment/drug is deemed experimental/investigational by the payer. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "56",
    "desc": "Procedure/treatment has not been deemed 'proven to be effective' by the payer. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "57",
    "desc": "Payment denied/reduced because the payer deems the information submitted does not support this level of service, this many services, this length of service, this dosage, or this day's supply."
  },
  {
    "code": "58",
    "desc": "Treatment was deemed by the payer to have been rendered in an inappropriate or invalid place of service. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment ..."
  },
  {
    "code": "59",
    "desc": "Processed based on multiple or concurrent procedure rules. (For example multiple surgery or diagnostic imaging, concurrent anesthesia.) Usage: Refer to the 835 Healthcare Policy Identification Segm..."
  },
  {
    "code": "60",
    "desc": "Charges for outpatient services are not covered when performed within a period of time prior to or after inpatient services."
  },
  {
    "code": "61",
    "desc": "Adjusted for failure to obtain second surgical opinion"
  },
  {
    "code": "62",
    "desc": "Payment denied/reduced for absence of, or exceeded, pre-certification/authorization."
  },
  {
    "code": "63",
    "desc": "Correction to a prior claim."
  },
  {
    "code": "64",
    "desc": "Denial reversed per Medical Review."
  },
  {
    "code": "65",
    "desc": "Procedure code was incorrect. This payment reflects the correct code."
  },
  {
    "code": "66",
    "desc": "Blood Deductible."
  },
  {
    "code": "67",
    "desc": "Lifetime reserve days. (Handled in QTY, QTY01=LA)"
  },
  {
    "code": "68",
    "desc": "DRG weight. (Handled in CLP12)"
  },
  {
    "code": "69",
    "desc": "Day outlier amount."
  },
  {
    "code": "70",
    "desc": "Cost outlier - Adjustment to compensate for additional costs."
  },
  {
    "code": "71",
    "desc": "Primary Payer amount."
  },
  {
    "code": "72",
    "desc": "Coinsurance day. (Handled in QTY, QTY01=CD)"
  },
  {
    "code": "73",
    "desc": "Administrative days."
  },
  {
    "code": "74",
    "desc": "Indirect Medical Education Adjustment."
  },
  {
    "code": "75",
    "desc": "Direct Medical Education Adjustment."
  },
  {
    "code": "76",
    "desc": "Disproportionate Share Adjustment."
  },
  {
    "code": "77",
    "desc": "Covered days. (Handled in QTY, QTY01=CA)"
  },
  {
    "code": "78",
    "desc": "Non-Covered days/Room charge adjustment."
  },
  {
    "code": "79",
    "desc": "Cost Report days. (Handled in MIA15)"
  },
  {
    "code": "80",
    "desc": "Outlier days. (Handled in QTY, QTY01=OU)"
  },
  {
    "code": "81",
    "desc": "Discharges."
  },
  {
    "code": "82",
    "desc": "PIP days."
  },
  {
    "code": "83",
    "desc": "Total visits."
  },
  {
    "code": "84",
    "desc": "Capital Adjustment. (Handled in MIA)"
  },
  {
    "code": "85",
    "desc": "Patient Interest Adjustment (Use Only Group code PR)"
  },
  {
    "code": "86",
    "desc": "Statutory Adjustment."
  },
  {
    "code": "87",
    "desc": "Transfer amount."
  },
  {
    "code": "88",
    "desc": "Adjustment amount represents collection against receivable created in prior overpayment."
  },
  {
    "code": "89",
    "desc": "Professional fees removed from charges."
  },
  {
    "code": "90",
    "desc": "Ingredient cost adjustment. Usage: To be used for pharmaceuticals only."
  },
  {
    "code": "91",
    "desc": "Dispensing fee adjustment."
  },
  {
    "code": "92",
    "desc": "Claim Paid in full."
  },
  {
    "code": "93",
    "desc": "No Claim level Adjustments."
  },
  {
    "code": "94",
    "desc": "Processed in Excess of charges."
  },
  {
    "code": "95",
    "desc": "Plan procedures not followed."
  },
  {
    "code": "96",
    "desc": "Non-covered charge(s). At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Usage: Refer to th..."
  },
  {
    "code": "97",
    "desc": "The benefit for this service is included in the payment/allowance for another service/procedure that has already been adjudicated. Usage: Refer to the 835 Healthcare Policy Identification Segment (..."
  },
  {
    "code": "98",
    "desc": "The hospital must file the Medicare claim for this inpatient non-physician service."
  },
  {
    "code": "99",
    "desc": "Medicare Secondary Payer Adjustment Amount."
  },
  {
    "code": "100",
    "desc": "Payment made to patient/insured/responsible party."
  },
  {
    "code": "101",
    "desc": "Predetermination: anticipated payment upon completion of services or claim adjudication."
  },
  {
    "code": "102",
    "desc": "Major Medical Adjustment."
  },
  {
    "code": "103",
    "desc": "Provider promotional discount (e.g., Senior citizen discount)."
  },
  {
    "code": "104",
    "desc": "Managed care withholding."
  },
  {
    "code": "105",
    "desc": "Tax withholding."
  },
  {
    "code": "106",
    "desc": "Patient payment option/election not in effect."
  },
  {
    "code": "107",
    "desc": "The related or qualifying claim/service was not identified on this claim. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "108",
    "desc": "Rent/purchase guidelines were not met. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "109",
    "desc": "Claim/service not covered by this payer/contractor. You must send the claim/service to the correct payer/contractor."
  },
  {
    "code": "110",
    "desc": "Billing date predates service date."
  },
  {
    "code": "111",
    "desc": "Not covered unless the provider accepts assignment."
  },
  {
    "code": "112",
    "desc": "Service not furnished directly to the patient and/or not documented."
  },
  {
    "code": "113",
    "desc": "Payment denied because service/procedure was provided outside the United States or as a result of war."
  },
  {
    "code": "114",
    "desc": "Procedure/product not approved by the Food and Drug Administration."
  },
  {
    "code": "115",
    "desc": "Procedure postponed, canceled, or delayed."
  },
  {
    "code": "116",
    "desc": "The advance indemnification notice signed by the patient did not comply with requirements."
  },
  {
    "code": "117",
    "desc": "Transportation is only covered to the closest facility that can provide the necessary care."
  },
  {
    "code": "118",
    "desc": "ESRD network support adjustment."
  },
  {
    "code": "119",
    "desc": "Benefit maximum for this time period or occurrence has been reached."
  },
  {
    "code": "120",
    "desc": "Patient is covered by a managed care plan."
  },
  {
    "code": "121",
    "desc": "Indemnification adjustment - compensation for outstanding member responsibility."
  },
  {
    "code": "122",
    "desc": "Psychiatric reduction."
  },
  {
    "code": "123",
    "desc": "Payer refund due to overpayment."
  },
  {
    "code": "124",
    "desc": "Payer refund amount - not our patient."
  },
  {
    "code": "125",
    "desc": "Submission/billing error(s). At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
  },
  {
    "code": "126",
    "desc": "Deductible -- Major Medical"
  },
  {
    "code": "127",
    "desc": "Coinsurance -- Major Medical"
  },
  {
    "code": "128",
    "desc": "Newborn's services are covered in the mother's Allowance."
  },
  {
    "code": "129",
    "desc": "Prior processing information appears incorrect. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an A..."
  },
  {
    "code": "130",
    "desc": "Claim submission fee."
  },
  {
    "code": "131",
    "desc": "Claim specific negotiated discount."
  },
  {
    "code": "132",
    "desc": "Prearranged demonstration project adjustment."
  },
  {
    "code": "133",
    "desc": "The disposition of this service line is pending further review. (Use only with Group Code OA). Usage: Use of this code requires a reversal and correction when the service line is finalized (use onl..."
  },
  {
    "code": "134",
    "desc": "Technical fees removed from charges."
  },
  {
    "code": "135",
    "desc": "Interim bills cannot be processed."
  },
  {
    "code": "136",
    "desc": "Failure to follow prior payer's coverage rules. (Use only with Group Code OA)"
  },
  {
    "code": "137",
    "desc": "Regulatory Surcharges, Assessments, Allowances or Health Related Taxes."
  },
  {
    "code": "138",
    "desc": "Appeal procedures not followed or time limits not met."
  },
  {
    "code": "139",
    "desc": "Contracted funding agreement - Subscriber is employed by the provider of services. Use only with Group Code CO."
  },
  {
    "code": "140",
    "desc": "Patient/Insured health identification number and name do not match."
  },
  {
    "code": "141",
    "desc": "Claim spans eligible and ineligible periods of coverage."
  },
  {
    "code": "142",
    "desc": "Monthly Medicaid patient liability amount."
  },
  {
    "code": "143",
    "desc": "Portion of payment deferred."
  },
  {
    "code": "144",
    "desc": "Incentive adjustment, e.g. preferred product/service."
  },
  {
    "code": "145",
    "desc": "Premium payment withholding"
  },
  {
    "code": "146",
    "desc": "Diagnosis was invalid for the date(s) of service reported."
  },
  {
    "code": "147",
    "desc": "Provider contracted/negotiated rate expired or not on file."
  },
  {
    "code": "148",
    "desc": "Information from another provider was not provided or was insufficient/incomplete. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance ..."
  },
  {
    "code": "149",
    "desc": "Lifetime benefit maximum has been reached for this service/benefit category."
  },
  {
    "code": "150",
    "desc": "Payer deems the information submitted does not support this level of service."
  },
  {
    "code": "151",
    "desc": "Payment adjusted because the payer deems the information submitted does not support this many/frequency of services."
  },
  {
    "code": "152",
    "desc": "Payer deems the information submitted does not support this length of service. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "153",
    "desc": "Payer deems the information submitted does not support this dosage."
  },
  {
    "code": "154",
    "desc": "Payer deems the information submitted does not support this day's supply."
  },
  {
    "code": "155",
    "desc": "Patient refused the service/procedure."
  },
  {
    "code": "156",
    "desc": "Flexible spending account payments. Note: Use code 187."
  },
  {
    "code": "157",
    "desc": "Service/procedure was provided as a result of an act of war."
  },
  {
    "code": "158",
    "desc": "Service/procedure was provided outside of the United States."
  },
  {
    "code": "159",
    "desc": "Service/procedure was provided as a result of terrorism."
  },
  {
    "code": "160",
    "desc": "Injury/illness was the result of an activity that is a benefit exclusion."
  },
  {
    "code": "161",
    "desc": "Provider performance bonus"
  },
  {
    "code": "162",
    "desc": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation."
  },
  {
    "code": "163",
    "desc": "Attachment/other documentation referenced on the claim was not received."
  },
  {
    "code": "164",
    "desc": "Attachment/other documentation referenced on the claim was not received in a timely fashion."
  },
  {
    "code": "165",
    "desc": "Referral absent or exceeded."
  },
  {
    "code": "166",
    "desc": "These services were submitted after this payers responsibility for processing claims under this plan ended."
  },
  {
    "code": "167",
    "desc": "This (these) diagnosis(es) is (are) not covered. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "168",
    "desc": "Service(s) have been considered under the patient's medical plan. Benefits are not available under this dental plan."
  },
  {
    "code": "169",
    "desc": "Alternate benefit has been provided."
  },
  {
    "code": "170",
    "desc": "Payment is denied when performed/billed by this type of provider. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "171",
    "desc": "Payment is denied when performed/billed by this type of provider in this type of facility. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information RE..."
  },
  {
    "code": "172",
    "desc": "Payment is adjusted when performed/billed by a provider of this specialty. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "173",
    "desc": "Service/equipment was not prescribed by a physician."
  },
  {
    "code": "174",
    "desc": "Service was not prescribed prior to delivery."
  },
  {
    "code": "175",
    "desc": "Prescription is incomplete."
  },
  {
    "code": "176",
    "desc": "Prescription is not current."
  },
  {
    "code": "177",
    "desc": "Patient has not met the required eligibility requirements."
  },
  {
    "code": "178",
    "desc": "Patient has not met the required spend down requirements."
  },
  {
    "code": "179",
    "desc": "Patient has not met the required waiting requirements. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "180",
    "desc": "Patient has not met the required residency requirements."
  },
  {
    "code": "181",
    "desc": "Procedure code was invalid on the date of service."
  },
  {
    "code": "182",
    "desc": "Procedure modifier was invalid on the date of service."
  },
  {
    "code": "183",
    "desc": "The referring provider is not eligible to refer the service billed. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "184",
    "desc": "The prescribing/ordering provider is not eligible to prescribe/order the service billed. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF)..."
  },
  {
    "code": "185",
    "desc": "The rendering provider is not eligible to perform the service billed. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "186",
    "desc": "Level of care change adjustment."
  },
  {
    "code": "187",
    "desc": "Consumer Spending Account payments (includes but is not limited to Flexible Spending Account, Health Savings Account, Health Reimbursement Account, etc.)"
  },
  {
    "code": "188",
    "desc": "This product/procedure is only covered when used according to FDA recommendations."
  },
  {
    "code": "189",
    "desc": "Not otherwise classified' or 'unlisted' procedure code (CPT/HCPCS) was billed when there is a specific procedure code for this procedure/service"
  },
  {
    "code": "190",
    "desc": "Payment is included in the allowance for a Skilled Nursing Facility (SNF) qualified stay."
  },
  {
    "code": "191",
    "desc": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Note: If adjustment is at the Claim Level, the payer must send and the provider should refer to the..."
  },
  {
    "code": "192",
    "desc": "Non standard adjustment code from paper remittance. Usage: This code is to be used by providers/payers providing Coordination of Benefits information to another payer in the 837 transaction only. T..."
  },
  {
    "code": "193",
    "desc": "Original payment decision is being maintained. Upon review, it was determined that this claim was processed properly."
  },
  {
    "code": "194",
    "desc": "Anesthesia performed by the operating physician, the assistant surgeon or the attending physician."
  },
  {
    "code": "195",
    "desc": "Refund issued to an erroneous priority payer for this claim/service."
  },
  {
    "code": "196",
    "desc": "Claim/service denied based on prior payer's coverage determination."
  },
  {
    "code": "197",
    "desc": "Precertification/authorization/notification/pre-treatment absent."
  },
  {
    "code": "198",
    "desc": "Precertification/notification/authorization/pre-treatment exceeded."
  },
  {
    "code": "199",
    "desc": "Revenue code and Procedure code do not match."
  },
  {
    "code": "200",
    "desc": "Expenses incurred during lapse in coverage"
  },
  {
    "code": "201",
    "desc": "Patient is responsible for amount of this claim/service through 'set aside arrangement' or other agreement. (Use only with Group Code PR) At least one Remark Code must be provided (may be comprised..."
  },
  {
    "code": "202",
    "desc": "Non-covered personal comfort or convenience services."
  },
  {
    "code": "203",
    "desc": "Discontinued or reduced service."
  },
  {
    "code": "204",
    "desc": "This service/equipment/drug is not covered under the patient's current benefit plan"
  },
  {
    "code": "205",
    "desc": "Pharmacy discount card processing fee"
  },
  {
    "code": "206",
    "desc": "National Provider Identifier - missing."
  },
  {
    "code": "207",
    "desc": "National Provider identifier - Invalid format"
  },
  {
    "code": "208",
    "desc": "National Provider Identifier - Not matched."
  },
  {
    "code": "209",
    "desc": "Per regulatory or other agreement. The provider cannot collect this amount from the patient. However, this amount may be billed to subsequent payer. Refund to patient if collected. (Use only with G..."
  },
  {
    "code": "210",
    "desc": "Payment adjusted because pre-certification/authorization not received in a timely fashion"
  },
  {
    "code": "211",
    "desc": "National Drug Codes (NDC) not eligible for rebate, are not covered."
  },
  {
    "code": "212",
    "desc": "Administrative surcharges are not covered"
  },
  {
    "code": "213",
    "desc": "Non-compliance with the physician self referral prohibition legislation or payer policy."
  },
  {
    "code": "214",
    "desc": "Workers' Compensation claim adjudicated as non-compensable. This Payer not liable for claim or service/treatment. Note: If adjustment is at the Claim Level, the payer must send and the provider sho..."
  },
  {
    "code": "215",
    "desc": "Based on subrogation of a third party settlement"
  },
  {
    "code": "216",
    "desc": "Based on the findings of a review organization or the payer's findings."
  },
  {
    "code": "217",
    "desc": "Based on payer reasonable and customary fees. No maximum allowable defined by legislated fee arrangement. (Note: To be used for Property and Casualty only)"
  },
  {
    "code": "218",
    "desc": "Based on entitlement to benefits. Note: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Rela..."
  },
  {
    "code": "219",
    "desc": "Based on extent of injury. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related In..."
  },
  {
    "code": "220",
    "desc": "The applicable fee schedule/fee database does not contain the billed code. Please resubmit a bill with the appropriate fee schedule/fee database code(s) that best describe the service(s) provided a..."
  },
  {
    "code": "221",
    "desc": "Claim is under investigation. Note: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related ..."
  },
  {
    "code": "222",
    "desc": "Exceeds the contracted maximum number of hours/days/units by this provider for this period. This is not patient specific. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110..."
  },
  {
    "code": "223",
    "desc": "Adjustment code for mandated federal, state or local law/regulation that is not already covered by another code and is mandated before a new code can be created."
  },
  {
    "code": "224",
    "desc": "Patient identification compromised by identity theft. Identity verification required for processing this and future claims."
  },
  {
    "code": "225",
    "desc": "Penalty or Interest Payment by Payer (Only used for plan to plan encounter reporting within the 837)"
  },
  {
    "code": "226",
    "desc": "Information requested from the Billing/Rendering Provider was not provided or not provided timely or was insufficient/incomplete. At least one Remark Code must be provided (may be comprised of eith..."
  },
  {
    "code": "227",
    "desc": "Information requested from the patient/insured/responsible party was not provided or was insufficient/incomplete. At least one Remark Code must be provided (may be comprised of either the NCPDP Rej..."
  },
  {
    "code": "228",
    "desc": "Denied for failure of this provider, another provider or the subscriber to supply requested information to a previous payer for their adjudication"
  },
  {
    "code": "229",
    "desc": "Partial charge amount not considered by Medicare due to the initial claim Type of Bill being 12X. Usage: This code can only be used in the 837 transaction to convey Coordination of Benefits informa..."
  },
  {
    "code": "230",
    "desc": "No available or correlating CPT/HCPCS code to describe this service. Note: Used only by Property and Casualty."
  },
  {
    "code": "231",
    "desc": "Mutually exclusive procedures cannot be done in the same day/setting. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "232",
    "desc": "Institutional Transfer Amount. Usage: Applies to institutional claims only and explains the DRG amount difference when the patient care crosses multiple institutions."
  },
  {
    "code": "233",
    "desc": "Services/charges related to the treatment of a hospital-acquired condition or preventable medical error."
  },
  {
    "code": "234",
    "desc": "This procedure is not paid separately. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
  },
  {
    "code": "235",
    "desc": "Sales Tax"
  },
  {
    "code": "236",
    "desc": "This procedure or procedure/modifier combination is not compatible with another procedure or procedure/modifier combination provided on the same day according to the National Correct Coding Initiat..."
  },
  {
    "code": "237",
    "desc": "Legislated/Regulatory Penalty. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
  },
  {
    "code": "238",
    "desc": "Claim spans eligible and ineligible periods of coverage, this is the reduction for the ineligible period. (Use only with Group Code PR)"
  },
  {
    "code": "239",
    "desc": "Claim spans eligible and ineligible periods of coverage. Rebill separate claims."
  },
  {
    "code": "240",
    "desc": "The diagnosis is inconsistent with the patient's birth weight. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "241",
    "desc": "Low Income Subsidy (LIS) Co-payment Amount"
  },
  {
    "code": "242",
    "desc": "Services not provided by network/primary care providers."
  },
  {
    "code": "243",
    "desc": "Services not authorized by network/primary care providers."
  },
  {
    "code": "244",
    "desc": "Payment reduced to zero due to litigation. Additional information will be sent following the conclusion of litigation. To be used for Property & Casualty only."
  },
  {
    "code": "245",
    "desc": "Provider performance program withhold."
  },
  {
    "code": "246",
    "desc": "This non-payable code is for required reporting only."
  },
  {
    "code": "247",
    "desc": "Deductible for Professional service rendered in an Institutional setting and billed on an Institutional claim."
  },
  {
    "code": "248",
    "desc": "Coinsurance for Professional service rendered in an Institutional setting and billed on an Institutional claim."
  },
  {
    "code": "249",
    "desc": "This claim has been identified as a readmission. (Use only with Group Code CO)"
  },
  {
    "code": "250",
    "desc": "The attachment/other documentation that was received was the incorrect attachment/document. The expected attachment/document is still missing. At least one Remark Code must be provided (may be comp..."
  },
  {
    "code": "251",
    "desc": "The attachment/other documentation that was received was incomplete or deficient. The necessary information is still needed to process the claim. At least one Remark Code must be provided (may be c..."
  },
  {
    "code": "252",
    "desc": "An attachment/other documentation is required to adjudicate this claim/service. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Adv..."
  },
  {
    "code": "253",
    "desc": "Sequestration - reduction in federal payment"
  },
  {
    "code": "254",
    "desc": "Claim received by the dental plan, but benefits not available under this plan. Submit these services to the patient's medical plan for further consideration."
  },
  {
    "code": "255",
    "desc": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation. (Use only with Group Code OA)"
  },
  {
    "code": "256",
    "desc": "Service not payable per managed care contract."
  },
  {
    "code": "257",
    "desc": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance Exchange requirements. This claim/service will be reversed and corrected when the ..."
  },
  {
    "code": "258",
    "desc": "Claim/service not covered when patient is in custody/incarcerated. Applicable federal, state or local authority may cover the claim/service."
  },
  {
    "code": "259",
    "desc": "Additional payment for Dental/Vision service utilization."
  },
  {
    "code": "260",
    "desc": "Processed under Medicaid ACA Enhanced Fee Schedule"
  },
  {
    "code": "261",
    "desc": "The procedure or service is inconsistent with the patient's history."
  },
  {
    "code": "262",
    "desc": "Adjustment for delivery cost. Usage: To be used for pharmaceuticals only."
  },
  {
    "code": "263",
    "desc": "Adjustment for shipping cost. Usage: To be used for pharmaceuticals only."
  },
  {
    "code": "264",
    "desc": "Adjustment for postage cost. Usage: To be used for pharmaceuticals only."
  },
  {
    "code": "265",
    "desc": "Adjustment for administrative cost. Usage: To be used for pharmaceuticals only."
  },
  {
    "code": "266",
    "desc": "Adjustment for compound preparation cost. Usage: To be used for pharmaceuticals only."
  },
  {
    "code": "267",
    "desc": "Claim/service spans multiple months. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.)"
  },
  {
    "code": "268",
    "desc": "The Claim spans two calendar years. Please resubmit one claim per calendar year."
  },
  {
    "code": "269",
    "desc": "Anesthesia not covered for this service/procedure. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "270",
    "desc": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's dental plan for further consideration."
  },
  {
    "code": "271",
    "desc": "Prior contractual reductions related to a current periodic payment as part of a contractual payment schedule when deferred amounts have been previously reported. (Use only with Group Code OA)"
  },
  {
    "code": "272",
    "desc": "Coverage/program guidelines were not met."
  },
  {
    "code": "273",
    "desc": "Coverage/program guidelines were exceeded."
  },
  {
    "code": "274",
    "desc": "Fee/Service not payable per patient Care Coordination arrangement."
  },
  {
    "code": "275",
    "desc": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered. (Use only with Group Code PR)"
  },
  {
    "code": "276",
    "desc": "Services denied by the prior payer(s) are not covered by this payer."
  },
  {
    "code": "277",
    "desc": "The disposition of the claim/service is undetermined during the premium payment grace period, per Health Insurance SHOP Exchange requirements. This claim/service will be reversed and corrected when..."
  },
  {
    "code": "278",
    "desc": "Performance program proficiency requirements not met. (Use only with Group Codes CO or PI) Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information RE..."
  },
  {
    "code": "279",
    "desc": "Services not provided by Preferred network providers. Usage: Use this code when there are member network limitations. For example, using contracted providers not in the member's 'narrow' network."
  },
  {
    "code": "280",
    "desc": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's Pharmacy plan for further consideration."
  },
  {
    "code": "281",
    "desc": "Deductible waived per contractual agreement. Use only with Group Code CO."
  },
  {
    "code": "282",
    "desc": "The procedure/revenue code is inconsistent with the type of bill. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "283",
    "desc": "Attending provider is not eligible to provide direction of care."
  },
  {
    "code": "284",
    "desc": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the billed services."
  },
  {
    "code": "285",
    "desc": "Appeal procedures not followed"
  },
  {
    "code": "286",
    "desc": "Appeal time limits not met"
  },
  {
    "code": "287",
    "desc": "Referral exceeded"
  },
  {
    "code": "288",
    "desc": "Referral absent"
  },
  {
    "code": "289",
    "desc": "Services considered under the dental and medical plans, benefits not available."
  },
  {
    "code": "290",
    "desc": "Claim received by the dental plan, but benefits not available under this plan. Claim has been forwarded to the patient's medical plan for further consideration."
  },
  {
    "code": "291",
    "desc": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's dental plan for further consideration."
  },
  {
    "code": "292",
    "desc": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's pharmacy plan for further consideration."
  },
  {
    "code": "293",
    "desc": "Payment made to employer."
  },
  {
    "code": "294",
    "desc": "Payment made to attorney."
  },
  {
    "code": "295",
    "desc": "Pharmacy Direct/Indirect Remuneration (DIR)"
  },
  {
    "code": "296",
    "desc": "Precertification/authorization/notification/pre-treatment number may be valid but does not apply to the provider."
  },
  {
    "code": "297",
    "desc": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's vision plan for further consideration."
  },
  {
    "code": "298",
    "desc": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's vision plan for further consideration."
  },
  {
    "code": "299",
    "desc": "The billing provider is not eligible to receive payment for the service billed."
  },
  {
    "code": "300",
    "desc": "Claim received by the Medical Plan, but benefits not available under this plan. Claim has been forwarded to the patient's Behavioral Health Plan for further consideration."
  },
  {
    "code": "301",
    "desc": "Claim received by the Medical Plan, but benefits not available under this plan. Submit these services to the patient's Behavioral Health Plan for further consideration."
  },
  {
    "code": "302",
    "desc": "Precertification/notification/authorization/pre-treatment time limit has expired."
  },
  {
    "code": "303",
    "desc": "Prior payer's (or payers') patient responsibility (deductible, coinsurance, co-payment) not covered for Qualified Medicare and Medicaid Beneficiaries. (Use only with Group Code CO)"
  },
  {
    "code": "304",
    "desc": "Claim received by the medical plan, but benefits not available under this plan. Submit these services to the patient's hearing plan for further consideration."
  },
  {
    "code": "305",
    "desc": "Claim received by the medical plan, but benefits not available under this plan. Claim has been forwarded to the patient's hearing plan for further consideration."
  },
  {
    "code": "306",
    "desc": "Type of bill is inconsistent with the patient status. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "307",
    "desc": "Medicare Maximum Fair Price Standard Default Refund Amount Adjustment. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remar..."
  },
  {
    "code": "308",
    "desc": "Payment is adjusted due to contracted funding agreement between the payer and provider."
  },
  {
    "code": "A0",
    "desc": "Patient refund amount."
  },
  {
    "code": "A1",
    "desc": "Claim/Service denied. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Usage: Use this cod..."
  },
  {
    "code": "A2",
    "desc": "Contractual adjustment."
  },
  {
    "code": "A3",
    "desc": "Medicare Secondary Payer liability met."
  },
  {
    "code": "A4",
    "desc": "Medicare Claim PPS Capital Day Outlier Amount."
  },
  {
    "code": "A5",
    "desc": "Medicare Claim PPS Capital Cost Outlier Amount."
  },
  {
    "code": "A6",
    "desc": "Prior hospitalization or 30 day transfer requirement not met."
  },
  {
    "code": "A7",
    "desc": "Presumptive Payment Adjustment"
  },
  {
    "code": "A8",
    "desc": "Ungroupable DRG."
  },
  {
    "code": "B1",
    "desc": "Non-covered visits."
  },
  {
    "code": "B2",
    "desc": "Covered visits."
  },
  {
    "code": "B3",
    "desc": "Covered charges."
  },
  {
    "code": "B4",
    "desc": "Late filing penalty."
  },
  {
    "code": "B5",
    "desc": "Coverage/program guidelines were not met or were exceeded."
  },
  {
    "code": "B6",
    "desc": "This payment is adjusted when performed/billed by this type of provider, by this type of provider in this type of facility, or by a provider of this specialty."
  },
  {
    "code": "B7",
    "desc": "This provider was not certified/eligible to be paid for this procedure/service on this date of service. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment I..."
  },
  {
    "code": "B8",
    "desc": "Alternative services were available, and should have been utilized. Usage: Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present."
  },
  {
    "code": "B9",
    "desc": "Patient is enrolled in a Hospice."
  },
  {
    "code": "B10",
    "desc": "Allowed amount has been reduced because a component of the basic procedure/test was paid. The beneficiary is not liable for more than the charge limit for the basic procedure/test."
  },
  {
    "code": "B11",
    "desc": "The claim/service has been transferred to the proper payer/processor for processing. Claim/service not covered by this payer/processor."
  },
  {
    "code": "B12",
    "desc": "Services not documented in patient's medical records."
  },
  {
    "code": "B13",
    "desc": "Previously paid. Payment for this claim/service may have been provided in a previous payment."
  },
  {
    "code": "B14",
    "desc": "Only one visit or consultation per physician per day is covered."
  },
  {
    "code": "B15",
    "desc": "This service/procedure requires that a qualifying service/procedure be received and covered. The qualifying other service/procedure has not been received/adjudicated. Usage: Refer to the 835 Health..."
  },
  {
    "code": "B16",
    "desc": "New Patient' qualifications were not met."
  },
  {
    "code": "B17",
    "desc": "Payment adjusted because this service was not prescribed by a physician, not prescribed prior to delivery, the prescription is incomplete, or the prescription is not current."
  },
  {
    "code": "B18",
    "desc": "This procedure code and modifier were invalid on the date of service."
  },
  {
    "code": "B19",
    "desc": "Claim/service adjusted because of the finding of a Review Organization."
  },
  {
    "code": "B20",
    "desc": "Procedure/service was partially or fully furnished by another provider."
  },
  {
    "code": "B21",
    "desc": "The charges were reduced because the service/care was partially furnished by another physician."
  },
  {
    "code": "B22",
    "desc": "This payment is adjusted based on the diagnosis."
  },
  {
    "code": "B23",
    "desc": "Procedure billed is not authorized per your Clinical Laboratory Improvement Amendment (CLIA) proficiency test."
  },
  {
    "code": "D1",
    "desc": "Claim/service denied. Level of subluxation is missing or inadequate."
  },
  {
    "code": "D2",
    "desc": "Claim lacks the name, strength, or dosage of the drug furnished."
  },
  {
    "code": "D3",
    "desc": "Claim/service denied because information to indicate if the patient owns the equipment that requires the part or supply was missing."
  },
  {
    "code": "D4",
    "desc": "Claim/service does not indicate the period of time for which this will be needed."
  },
  {
    "code": "D5",
    "desc": "Claim/service denied. Claim lacks individual lab codes included in the test."
  },
  {
    "code": "D6",
    "desc": "Claim/service denied. Claim did not include patient's medical record for the service."
  },
  {
    "code": "D7",
    "desc": "Claim/service denied. Claim lacks date of patient's most recent physician visit."
  },
  {
    "code": "D8",
    "desc": "Claim/service denied. Claim lacks indicator that 'x-ray is available for review.'"
  },
  {
    "code": "D9",
    "desc": "Claim/service denied. Claim lacks invoice or statement certifying the actual cost of the lens, less discounts or the type of intraocular lens used."
  },
  {
    "code": "D10",
    "desc": "Claim/service denied. Completed physician financial relationship form not on file."
  },
  {
    "code": "D11",
    "desc": "Claim lacks completed pacemaker registration form."
  },
  {
    "code": "D12",
    "desc": "Claim/service denied. Claim does not identify who performed the purchased diagnostic test or the amount you were charged for the test."
  },
  {
    "code": "D13",
    "desc": "Claim/service denied. Performed by a facility/supplier in which the ordering/referring physician has a financial interest."
  },
  {
    "code": "D14",
    "desc": "Claim lacks indication that plan of treatment is on file."
  },
  {
    "code": "D15",
    "desc": "Claim lacks indication that service was supervised or evaluated by a physician."
  },
  {
    "code": "D16",
    "desc": "Claim lacks prior payer payment information."
  },
  {
    "code": "D17",
    "desc": "Claim/Service has invalid non-covered days."
  },
  {
    "code": "D18",
    "desc": "Claim/Service has missing diagnosis information."
  },
  {
    "code": "D19",
    "desc": "Claim/Service lacks Physician/Operative or other supporting documentation"
  },
  {
    "code": "D20",
    "desc": "Claim/Service missing service/product information."
  },
  {
    "code": "D21",
    "desc": "This (these) diagnosis(es) is (are) missing or are invalid"
  },
  {
    "code": "D22",
    "desc": "Reimbursement was adjusted for the reasons to be provided in separate correspondence. (Note: To be used for Workers' Compensation only) - Temporary code to be added for timeframe only until 01/01/2..."
  },
  {
    "code": "D23",
    "desc": "This dual eligible patient is covered by Medicare Part D per Medicare Retro-Eligibility. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remit..."
  },
  {
    "code": "P1",
    "desc": "State-mandated Requirement for Property and Casualty, see Claim Payment Remarks Code for specific explanation. To be used for Property and Casualty only."
  },
  {
    "code": "P2",
    "desc": "Not a work related injury/illness and thus not the liability of the workers' compensation carrier Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to th..."
  },
  {
    "code": "P3",
    "desc": "Workers' Compensation case settled. Patient is responsible for amount of this claim/service through WC 'Medicare set aside arrangement' or other agreement. To be used for Workers' Compensation only..."
  },
  {
    "code": "P4",
    "desc": "Workers' Compensation claim adjudicated as non-compensable. This Payer not liable for claim or service/treatment. Usage: If adjustment is at the Claim Level, the payer must send and the provider sh..."
  },
  {
    "code": "P5",
    "desc": "Based on payer reasonable and customary fees. No maximum allowable defined by legislated fee arrangement. To be used for Property and Casualty only."
  },
  {
    "code": "P6",
    "desc": "Based on entitlement to benefits. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Rel..."
  },
  {
    "code": "P7",
    "desc": "The applicable fee schedule/fee database does not contain the billed code. Please resubmit a bill with the appropriate fee schedule/fee database code(s) that best describe the service(s) provided a..."
  },
  {
    "code": "P8",
    "desc": "Claim is under investigation. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Insurance Policy Number Segment (Loop 2100 Other Claim Related..."
  },
  {
    "code": "P9",
    "desc": "No available or correlating CPT/HCPCS code to describe this service. To be used for Property and Casualty only."
  },
  {
    "code": "P10",
    "desc": "Payment reduced to zero due to litigation. Additional information will be sent following the conclusion of litigation. To be used for Property and Casualty only."
  },
  {
    "code": "P11",
    "desc": "The disposition of the related Property & Casualty claim (injury or illness) is pending due to litigation. To be used for Property and Casualty only. (Use only with Group Code OA)"
  },
  {
    "code": "P12",
    "desc": "Workers' compensation jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identif..."
  },
  {
    "code": "P13",
    "desc": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable. Usage: If adjustment is at the Claim Level, the pay..."
  },
  {
    "code": "P14",
    "desc": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day. Usage: Refer to the 835 Healthcare Policy Identification Seg..."
  },
  {
    "code": "P15",
    "desc": "Workers' Compensation Medical Treatment Guideline Adjustment. To be used for Workers' Compensation only."
  },
  {
    "code": "P16",
    "desc": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction. To be used for Workers' Compensation only. (Use with Group Code CO or OA)"
  },
  {
    "code": "P17",
    "desc": "Referral not authorized by attending physician per regulatory requirement. To be used for Property and Casualty only."
  },
  {
    "code": "P18",
    "desc": "Procedure is not listed in the jurisdiction fee schedule. An allowance has been made for a comparable service. To be used for Property and Casualty only."
  },
  {
    "code": "P19",
    "desc": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due. To be used for Property and Casualty only."
  },
  {
    "code": "P20",
    "desc": "Service not paid under jurisdiction allowed outpatient facility fee schedule. To be used for Property and Casualty only."
  },
  {
    "code": "P21",
    "desc": "Payment denied based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim Le..."
  },
  {
    "code": "P22",
    "desc": "Payment adjusted based on the Medical Payments Coverage (MPC) and/or Personal Injury Protection (PIP) Benefits jurisdictional regulations, or payment policies. Usage: If adjustment is at the Claim ..."
  },
  {
    "code": "P23",
    "desc": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider..."
  },
  {
    "code": "P24",
    "desc": "Payment adjusted based on Preferred Provider Organization (PPO). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Iden..."
  },
  {
    "code": "P25",
    "desc": "Payment adjusted based on Medical Provider Network (MPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identificat..."
  },
  {
    "code": "P26",
    "desc": "Payment adjusted based on Voluntary Provider network (VPN). Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identific..."
  },
  {
    "code": "P27",
    "desc": "Payment denied based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should r..."
  },
  {
    "code": "P28",
    "desc": "Payment adjusted based on the Liability Coverage Benefits jurisdictional regulations and/or payment policies. Usage: If adjustment is at the Claim Level, the payer must send and the provider should..."
  },
  {
    "code": "P29",
    "desc": "Liability Benefits jurisdictional fee schedule adjustment. Usage: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identifica..."
  },
  {
    "code": "P30",
    "desc": "Payment denied for exacerbation when supporting documentation was not complete. To be used for Property and Casualty only."
  },
  {
    "code": "P31",
    "desc": "Payment denied for exacerbation when treatment exceeds time allowed. To be used for Property and Casualty only."
  },
  {
    "code": "P32",
    "desc": "Payment adjusted due to Apportionment."
  },
  {
    "code": "W1",
    "desc": "Workers' compensation jurisdictional fee schedule adjustment. Note: If adjustment is at the Claim Level, the payer must send and the provider should refer to the 835 Class of Contract Code Identifi..."
  },
  {
    "code": "W2",
    "desc": "Payment reduced or denied based on workers' compensation jurisdictional regulations or payment policies, use only if no other code is applicable. Note: If adjustment is at the Claim Level, the paye..."
  },
  {
    "code": "W3",
    "desc": "The Benefit for this Service is included in the payment/allowance for another service/procedure that has been performed on the same day. Note: Refer to the 835 Healthcare Policy Identification Segm..."
  },
  {
    "code": "W4",
    "desc": "Workers' Compensation Medical Treatment Guideline Adjustment."
  },
  {
    "code": "W5",
    "desc": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction. (Use with Group Code CO or OA)"
  },
  {
    "code": "W6",
    "desc": "Referral not authorized by attending physician per regulatory requirement."
  },
  {
    "code": "W7",
    "desc": "Procedure is not listed in the jurisdiction fee schedule. An allowance has been made for a comparable service."
  },
  {
    "code": "W8",
    "desc": "Procedure has a relative value of zero in the jurisdiction fee schedule, therefore no payment is due."
  },
  {
    "code": "W9",
    "desc": "Service not paid under jurisdiction allowed outpatient facility fee schedule."
  },
  {
    "code": "Y1",
    "desc": "Payment denied based on Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional regulations or payment policies, use only if no other code is applicable. Note: I..."
  },
  {
    "code": "Y2",
    "desc": "Payment adjusted based on Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional regulations or payment policies, use only if no other code is applicable. Note:..."
  },
  {
    "code": "Y3",
    "desc": "Medical Payments Coverage (MPC) or Personal Injury Protection (PIP) Benefits jurisdictional fee schedule adjustment. Note: If adjustment is at the Claim Level, the payer must send and the provider ..."
  }
];

const rarcCodes = [
  {
    "code": "M1",
    "desc": "X-ray not taken within the past 12 months or near enough to the start of treatment."
  },
  {
    "code": "M2",
    "desc": "Not paid separately when the patient is an inpatient."
  },
  {
    "code": "M3",
    "desc": "Equipment is the same or similar to equipment already being used."
  },
  {
    "code": "M4",
    "desc": "Alert: This is the last monthly installment payment for this durable medical equipment."
  },
  {
    "code": "M5",
    "desc": "Monthly rental payments can continue until the earlier of the 15th month from the first rental month, or the month when the equipment is no longer needed."
  },
  {
    "code": "M6",
    "desc": "Alert: You must furnish and service this item for any period of medical need for the remainder of the reasonable useful lifetime of the equipment."
  },
  {
    "code": "M7",
    "desc": "No rental payments after the item is purchased, returned or after the total of issued rental payments equals the purchase price."
  },
  {
    "code": "M8",
    "desc": "We do not accept blood gas tests results when the test was conducted by a medical supplier or taken while the patient is on oxygen."
  },
  {
    "code": "M9",
    "desc": "Alert: This is the tenth rental month. You must offer the patient the choice of changing the rental to a purchase agreement."
  },
  {
    "code": "M10",
    "desc": "Equipment purchases are limited to the first or the tenth month of medical necessity."
  },
  {
    "code": "M11",
    "desc": "DME, orthotics and prosthetics must be billed to the DME carrier who services the patient's zip code."
  },
  {
    "code": "M12",
    "desc": "Diagnostic tests performed by a physician must indicate whether purchased services are included on the claim."
  },
  {
    "code": "M13",
    "desc": "Only one initial visit is covered per specialty per medical group."
  },
  {
    "code": "M14",
    "desc": "No separate payment for an injection administered during an office visit, and no payment for a full office visit if the patient only received an injection."
  },
  {
    "code": "M15",
    "desc": "Separately billed services/tests have been bundled as they are considered components of the same procedure. Separate payment is not allowed."
  },
  {
    "code": "M16",
    "desc": "Alert: Please see our web site, mailings, or bulletins for more details concerning this policy/procedure/decision."
  },
  {
    "code": "M17",
    "desc": "Alert: Payment approved as you did not know, and could not reasonably have been expected to know, that this would not normally have been covered for this patient. In the future, you will be liable ..."
  },
  {
    "code": "M18",
    "desc": "Certain services may be approved for home use. Neither a hospital nor a Skilled Nursing Facility (SNF) is considered to be a patient's home."
  },
  {
    "code": "M19",
    "desc": "Missing oxygen certification/re-certification."
  },
  {
    "code": "M20",
    "desc": "Missing/incomplete/invalid HCPCS."
  },
  {
    "code": "M21",
    "desc": "Missing/incomplete/invalid place of residence for this service/item provided in a home."
  },
  {
    "code": "M22",
    "desc": "Missing/incomplete/invalid number of miles traveled."
  },
  {
    "code": "M23",
    "desc": "Missing invoice."
  },
  {
    "code": "M24",
    "desc": "Missing/incomplete/invalid number of doses per vial."
  },
  {
    "code": "M25",
    "desc": "The information furnished does not substantiate the need for this level of service. If you believe the service should have been fully covered as billed, or if you did not know and could not reasona..."
  },
  {
    "code": "M26",
    "desc": "The information furnished does not substantiate the need for this level of service. If you have collected any amount from the patient for this level of service/any amount that exceeds the limiting ..."
  },
  {
    "code": "M27",
    "desc": "Alert: The patient has been relieved of liability of payment of these items and services under the limitation of liability provision of the law. The provider is ultimately liable for the patient's ..."
  },
  {
    "code": "M28",
    "desc": "This does not qualify for payment under Part B when Part A coverage is exhausted or not otherwise available."
  },
  {
    "code": "M29",
    "desc": "Missing operative note/report."
  },
  {
    "code": "M30",
    "desc": "Missing pathology report."
  },
  {
    "code": "M31",
    "desc": "Missing radiology report."
  },
  {
    "code": "M32",
    "desc": "Alert: This is a conditional payment made pending a decision on this service by the patient's primary payer. This payment may be subject to refund upon your receipt of any additional payment for th..."
  },
  {
    "code": "M36",
    "desc": "This is the 11th rental month. We cannot pay for this until you indicate that the patient has been given the option of changing the rental to a purchase."
  },
  {
    "code": "M37",
    "desc": "Not covered when the patient is under age 35."
  },
  {
    "code": "M38",
    "desc": "Alert: The patient is liable for the charges for this service as they were informed in writing before the service was furnished that we would not pay for it and the patient agreed to be responsible..."
  },
  {
    "code": "M39",
    "desc": "Alert: The patient is not liable for payment of this service as the advance notice of non-coverage you provided the patient did not comply with program requirements."
  },
  {
    "code": "M40",
    "desc": "Claim must be assigned and must be filed by the practitioner's employer."
  },
  {
    "code": "M41",
    "desc": "We do not pay for this as the patient has no legal obligation to pay for this."
  },
  {
    "code": "M42",
    "desc": "The medical necessity form must be personally signed by the attending physician."
  },
  {
    "code": "M44",
    "desc": "Missing/incomplete/invalid condition code."
  },
  {
    "code": "M45",
    "desc": "Missing/incomplete/invalid occurrence code(s)."
  },
  {
    "code": "M46",
    "desc": "Missing/incomplete/invalid occurrence span code(s)."
  },
  {
    "code": "M47",
    "desc": "Missing/incomplete/invalid Payer Claim Control Number. Other terms exist for this element including, but not limited to, Internal Control Number (ICN), Claim Control Number (CCN), Document Control ..."
  },
  {
    "code": "M49",
    "desc": "Missing/incomplete/invalid value code(s) or amount(s)."
  },
  {
    "code": "M50",
    "desc": "Missing/incomplete/invalid revenue code(s)."
  },
  {
    "code": "M51",
    "desc": "Missing/incomplete/invalid procedure code(s)."
  },
  {
    "code": "M52",
    "desc": "Missing/incomplete/invalid 'from' date(s) of service."
  },
  {
    "code": "M53",
    "desc": "Missing/incomplete/invalid days or units of service."
  },
  {
    "code": "M54",
    "desc": "Missing/incomplete/invalid total charges."
  },
  {
    "code": "M55",
    "desc": "We do not pay for self-administered anti-emetic drugs that are not administered with a covered oral anti-cancer drug."
  },
  {
    "code": "M56",
    "desc": "Missing/incomplete/invalid payer identifier."
  },
  {
    "code": "M59",
    "desc": "Missing/incomplete/invalid 'to' date(s) of service."
  },
  {
    "code": "M60",
    "desc": "Missing Certificate of Medical Necessity."
  },
  {
    "code": "M61",
    "desc": "We cannot pay for this as the approval period for the FDA clinical trial has expired."
  },
  {
    "code": "M62",
    "desc": "Missing/incomplete/invalid treatment authorization code."
  },
  {
    "code": "M64",
    "desc": "Missing/incomplete/invalid other diagnosis."
  },
  {
    "code": "M65",
    "desc": "One interpreting physician charge can be submitted per claim when a purchased diagnostic test is indicated. Please submit a separate claim for each interpreting physician."
  },
  {
    "code": "M66",
    "desc": "Our records indicate that you billed diagnostic tests subject to price limitations and the procedure code submitted includes a professional component. Only the technical component is subject to pri..."
  },
  {
    "code": "M67",
    "desc": "Missing/incomplete/invalid other procedure code(s)."
  },
  {
    "code": "M69",
    "desc": "Paid at the regular rate as you did not submit documentation to justify the modified procedure code."
  },
  {
    "code": "M70",
    "desc": "Alert: The NDC code submitted for this service was translated to a HCPCS code for processing, but please continue to submit the NDC on future claims for this item."
  },
  {
    "code": "M71",
    "desc": "Total payment reduced due to overlap of tests billed."
  },
  {
    "code": "M73",
    "desc": "The HPSA/Physician Scarcity bonus can only be paid on the professional component of this service. Rebill as separate professional and technical components."
  },
  {
    "code": "M74",
    "desc": "This service does not qualify for a HPSA/Physician Scarcity bonus payment."
  },
  {
    "code": "M75",
    "desc": "Multiple automated multichannel tests performed on the same day combined for payment."
  },
  {
    "code": "M76",
    "desc": "Missing/incomplete/invalid diagnosis or condition."
  },
  {
    "code": "M77",
    "desc": "Missing/incomplete/invalid/inappropriate place of service."
  },
  {
    "code": "M79",
    "desc": "Missing/incomplete/invalid charge."
  },
  {
    "code": "M80",
    "desc": "Not covered when performed during the same session/date as a previously processed service for the patient."
  },
  {
    "code": "M81",
    "desc": "You are required to code to the highest level of specificity."
  },
  {
    "code": "M82",
    "desc": "Service is not covered when patient is under age 50."
  },
  {
    "code": "M83",
    "desc": "Service is not covered unless the patient is classified as at high risk."
  },
  {
    "code": "M84",
    "desc": "Medical code sets used must be the codes in effect at the time of service."
  },
  {
    "code": "M85",
    "desc": "Subjected to review of physician evaluation and management services."
  },
  {
    "code": "M86",
    "desc": "Service denied because payment already made for same/similar procedure within set time frame."
  },
  {
    "code": "M87",
    "desc": "Claim/service(s) subjected to CFO-CAP prepayment review."
  },
  {
    "code": "M89",
    "desc": "Not covered more than once under age 40."
  },
  {
    "code": "M90",
    "desc": "Not covered more than once in a 12 month period."
  },
  {
    "code": "M91",
    "desc": "Lab procedures with different CLIA certification numbers must be billed on separate claims."
  },
  {
    "code": "M93",
    "desc": "Information supplied supports a break in therapy. A new capped rental period began with delivery of this equipment."
  },
  {
    "code": "M94",
    "desc": "Information supplied does not support a break in therapy. A new capped rental period will not begin."
  },
  {
    "code": "M95",
    "desc": "Services subjected to Home Health Initiative medical review/cost report audit."
  },
  {
    "code": "M96",
    "desc": "The technical component of a service furnished to an inpatient may only be billed by that inpatient facility. You must contact the inpatient facility for technical component reimbursement. If not a..."
  },
  {
    "code": "M97",
    "desc": "Not paid to practitioner when provided to patient in this place of service. Payment included in the reimbursement issued the facility."
  },
  {
    "code": "M99",
    "desc": "Missing/incomplete/invalid Universal Product Number/Serial Number."
  },
  {
    "code": "M100",
    "desc": "We do not pay for an oral anti-emetic drug that is not administered for use immediately before, at, or within 48 hours of administration of a covered chemotherapy drug."
  },
  {
    "code": "M102",
    "desc": "Service not performed on equipment approved by the FDA for this purpose."
  },
  {
    "code": "M103",
    "desc": "Information supplied supports a break in therapy. However, the medical information we have for this patient does not support the need for this item as billed. We have approved payment for this item..."
  },
  {
    "code": "M104",
    "desc": "Information supplied supports a break in therapy. A new capped rental period will begin with delivery of the equipment. This is the maximum approved under the fee schedule for this item or service."
  },
  {
    "code": "M105",
    "desc": "Information supplied does not support a break in therapy. The medical information we have for this patient does not support the need for this item as billed. We have approved payment for this item ..."
  },
  {
    "code": "M107",
    "desc": "Payment reduced as 90-day rolling average hematocrit for ESRD patient exceeded 36.5%."
  },
  {
    "code": "M109",
    "desc": "We have provided you with a bundled payment for a teleconsultation. You must send 25 percent of the teleconsultation payment to the referring practitioner."
  },
  {
    "code": "M111",
    "desc": "We do not pay for chiropractic manipulative treatment when the patient refuses to have an x-ray taken."
  },
  {
    "code": "M112",
    "desc": "Reimbursement for this item is based on the single payment amount required under the DMEPOS Competitive Bidding Program for the area where the patient resides."
  },
  {
    "code": "M113",
    "desc": "Our records indicate that this patient began using this item/service prior to the current contract period for the DMEPOS Competitive Bidding Program."
  },
  {
    "code": "M114",
    "desc": "This service was processed in accordance with rules and guidelines under the DMEPOS Competitive Bidding Program or a Demonstration Project. For more information regarding these projects, contact yo..."
  },
  {
    "code": "M115",
    "desc": "This item is denied when provided to this patient by a non-contract or non-demonstration supplier."
  },
  {
    "code": "M116",
    "desc": "Processed under a demonstration project or program. Project or program is ending and additional services may not be paid under this project or program."
  },
  {
    "code": "M117",
    "desc": "Not covered unless submitted via electronic claim."
  },
  {
    "code": "M119",
    "desc": "Missing/incomplete/invalid/ deactivated/withdrawn National Drug Code (NDC)."
  },
  {
    "code": "M121",
    "desc": "We pay for this service only when performed with a covered cryosurgical ablation."
  },
  {
    "code": "M122",
    "desc": "Missing/incomplete/invalid level of subluxation."
  },
  {
    "code": "M123",
    "desc": "Missing/incomplete/invalid name, strength, or dosage of the drug furnished."
  },
  {
    "code": "M124",
    "desc": "Missing indication of whether the patient owns the equipment that requires the part or supply."
  },
  {
    "code": "M125",
    "desc": "Missing/incomplete/invalid information on the period of time for which the service/supply/equipment will be needed."
  },
  {
    "code": "M126",
    "desc": "Missing/incomplete/invalid individual lab codes included in the test."
  },
  {
    "code": "M127",
    "desc": "Missing patient medical record for this service."
  },
  {
    "code": "M129",
    "desc": "Missing/incomplete/invalid indicator of x-ray availability for review."
  },
  {
    "code": "M130",
    "desc": "Missing invoice or statement certifying the actual cost of the lens, less discounts, and/or the type of intraocular lens used."
  },
  {
    "code": "M131",
    "desc": "Missing physician financial relationship form."
  },
  {
    "code": "M132",
    "desc": "Missing pacemaker registration form."
  },
  {
    "code": "M133",
    "desc": "Claim did not identify who performed the purchased diagnostic test or the amount you were charged for the test."
  },
  {
    "code": "M134",
    "desc": "Performed by a facility/supplier in which the provider has a financial interest."
  },
  {
    "code": "M135",
    "desc": "Missing/incomplete/invalid plan of treatment."
  },
  {
    "code": "M136",
    "desc": "Missing/incomplete/invalid indication that the service was supervised or evaluated by a physician."
  },
  {
    "code": "M137",
    "desc": "Part B coinsurance under a demonstration project or pilot program."
  },
  {
    "code": "M138",
    "desc": "Patient identified as a demonstration participant but the patient was not enrolled in the demonstration at the time services were rendered. Coverage is limited to demonstration participants."
  },
  {
    "code": "M139",
    "desc": "Denied services exceed the coverage limit for the demonstration."
  },
  {
    "code": "M141",
    "desc": "Missing physician certified plan of care."
  },
  {
    "code": "M142",
    "desc": "Missing American Diabetes Association Certificate of Recognition."
  },
  {
    "code": "M143",
    "desc": "The provider must submit a letter of medical necessity."
  },
  {
    "code": "M144",
    "desc": "Pre-/post-operative care payment is included in the allowance for the surgery/procedure."
  },
  {
    "code": "MA01",
    "desc": "Alert: If you do not agree with what we approved for these services, you may appeal our decision. To make sure that we are fair to you, we require another individual that did not process your initi..."
  },
  {
    "code": "MA02",
    "desc": "Alert: If you do not agree with this determination, you have the right to appeal. You must file a written request for an appeal within 180 days of the date you receive this notice."
  },
  {
    "code": "MA04",
    "desc": "Secondary payment cannot be considered without the identity of or payment information from the primary payer. The information was either not reported or was illegible."
  },
  {
    "code": "MA07",
    "desc": "Alert: The claim information has also been forwarded to Medicaid for review."
  },
  {
    "code": "MA08",
    "desc": "Alert: Claim information was not forwarded because the supplemental coverage is not with a Medigap plan, or you do not participate in Medicare."
  },
  {
    "code": "MA09",
    "desc": "Alert: Claim submitted as unassigned but processed as assigned in accordance with our current assignment/participation agreement."
  },
  {
    "code": "MA10",
    "desc": "Alert: The patient's payment was in excess of the amount owed. You must refund the overpayment to the patient."
  },
  {
    "code": "MA12",
    "desc": "You have not established that you have the right under the law to bill for services furnished by the person(s) that furnished this (these) service(s)."
  },
  {
    "code": "MA13",
    "desc": "Alert: You may be subject to penalties if you bill the patient for amounts not reported with the PR (patient responsibility) group code."
  },
  {
    "code": "MA14",
    "desc": "Alert: The patient is a member of an employer-sponsored prepaid health plan. Services from outside that health plan are not covered. However, as you were not previously notified of this, we are pay..."
  },
  {
    "code": "MA15",
    "desc": "Alert: Your claim has been separated to expedite handling. You will receive a separate notice for the other services reported."
  },
  {
    "code": "MA16",
    "desc": "The patient is covered by the Black Lung Program. Send this claim to the Department of Labor, Federal Black Lung Program, P.O. Box 828, Lanham-Seabrook MD 20703."
  },
  {
    "code": "MA17",
    "desc": "We are the primary payer and have paid at the primary rate. You must contact the patient's other insurer to refund any excess it may have paid due to its erroneous primary payment."
  },
  {
    "code": "MA18",
    "desc": "Alert: The claim information is also being forwarded to the patient's supplemental insurer. Send any questions regarding supplemental benefits to them."
  },
  {
    "code": "MA19",
    "desc": "Alert: Information was not sent to the Medigap insurer due to incorrect/invalid information you submitted concerning that insurer. Please verify your information and submit your secondary claim dir..."
  },
  {
    "code": "MA20",
    "desc": "Skilled Nursing Facility (SNF) stay not covered when care is primarily related to the use of an urethral catheter for convenience or the control of incontinence."
  },
  {
    "code": "MA21",
    "desc": "SSA records indicate mismatch with name and sex."
  },
  {
    "code": "MA22",
    "desc": "Payment of less than $1.00 suppressed."
  },
  {
    "code": "MA23",
    "desc": "Demand bill approved as result of medical review."
  },
  {
    "code": "MA24",
    "desc": "Christian Science Sanitarium/ Skilled Nursing Facility (SNF) bill in the same benefit period."
  },
  {
    "code": "MA25",
    "desc": "A patient may not elect to change a hospice provider more than once in a benefit period."
  },
  {
    "code": "MA26",
    "desc": "Alert: Our records indicate that you were previously informed of this rule."
  },
  {
    "code": "MA27",
    "desc": "Missing/incomplete/invalid entitlement number or name shown on the claim."
  },
  {
    "code": "MA28",
    "desc": "Alert: Receipt of this notice by a physician or supplier who did not accept assignment is for information only and does not make the physician or supplier a party to the determination. No additiona..."
  },
  {
    "code": "MA30",
    "desc": "Missing/incomplete/invalid type of bill."
  },
  {
    "code": "MA31",
    "desc": "Missing/incomplete/invalid beginning and ending dates of the period billed."
  },
  {
    "code": "MA32",
    "desc": "Missing/incomplete/invalid number of covered days during the billing period."
  },
  {
    "code": "MA33",
    "desc": "Missing/incomplete/invalid non-covered days during the billing period."
  },
  {
    "code": "MA34",
    "desc": "Missing/incomplete/invalid number of coinsurance days during the billing period."
  },
  {
    "code": "MA35",
    "desc": "Missing/incomplete/invalid number of lifetime reserve days."
  },
  {
    "code": "MA36",
    "desc": "Missing/incomplete/invalid patient name."
  },
  {
    "code": "MA37",
    "desc": "Missing/incomplete/invalid patient's address."
  },
  {
    "code": "MA39",
    "desc": "Missing/incomplete/invalid gender."
  },
  {
    "code": "MA40",
    "desc": "Missing/incomplete/invalid admission date."
  },
  {
    "code": "MA41",
    "desc": "Missing/incomplete/invalid admission type."
  },
  {
    "code": "MA42",
    "desc": "Missing/incomplete/invalid admission source."
  },
  {
    "code": "MA43",
    "desc": "Missing/incomplete/invalid patient status."
  },
  {
    "code": "MA44",
    "desc": "Alert: No appeal rights. Adjudicative decision based on law."
  },
  {
    "code": "MA45",
    "desc": "Alert: As previously advised, a portion or all of your payment is being held in a special account."
  },
  {
    "code": "MA46",
    "desc": "Alert: The new information was considered but additional payment will not be issued."
  },
  {
    "code": "MA47",
    "desc": "Our records show you have opted out of Medicare, agreeing with the patient not to bill Medicare for services/tests/supplies furnished. As result, we cannot pay this claim. The patient is responsibl..."
  },
  {
    "code": "MA48",
    "desc": "Missing/incomplete/invalid name or address of responsible party or primary payer."
  },
  {
    "code": "MA50",
    "desc": "Missing/incomplete/invalid Investigational Device Exemption number or Clinical Trial number."
  },
  {
    "code": "MA53",
    "desc": "Missing/incomplete/invalid Competitive Bidding Demonstration Project identification."
  },
  {
    "code": "MA54",
    "desc": "Physician certification or election consent for hospice care not received timely."
  },
  {
    "code": "MA55",
    "desc": "Not covered as patient received medical health care services, automatically revoking his/her election to receive religious non-medical health care services."
  },
  {
    "code": "MA56",
    "desc": "Our records show you have opted out of Medicare, agreeing with the patient not to bill Medicare for services/tests/supplies furnished. As result, we cannot pay this claim. The patient is responsibl..."
  },
  {
    "code": "MA57",
    "desc": "Patient submitted written request to revoke his/her election for religious non-medical health care services."
  },
  {
    "code": "MA58",
    "desc": "Missing/incomplete/invalid release of information indicator."
  },
  {
    "code": "MA59",
    "desc": "Alert: The patient overpaid you for these services. You must issue the patient a refund within 30 days for the difference between his/her payment and the total amount shown as patient responsibilit..."
  },
  {
    "code": "MA60",
    "desc": "Missing/incomplete/invalid patient relationship to insured."
  },
  {
    "code": "MA61",
    "desc": "Missing/incomplete/invalid social security number."
  },
  {
    "code": "MA62",
    "desc": "Alert: This is a telephone review decision."
  },
  {
    "code": "MA63",
    "desc": "Missing/incomplete/invalid principal diagnosis."
  },
  {
    "code": "MA64",
    "desc": "Our records indicate that we should be the third payer for this claim. We cannot process this claim until we have received payment information from the primary and secondary payers."
  },
  {
    "code": "MA65",
    "desc": "Missing/incomplete/invalid admitting diagnosis."
  },
  {
    "code": "MA66",
    "desc": "Missing/incomplete/invalid principal procedure code."
  },
  {
    "code": "MA67",
    "desc": "Alert: Correction to a prior claim."
  },
  {
    "code": "MA68",
    "desc": "Alert: We did not crossover this claim because the secondary insurance information on the claim was incomplete. Please supply complete information or use the PLANID of the insurer to assure correct..."
  },
  {
    "code": "MA69",
    "desc": "Missing/incomplete/invalid remarks."
  },
  {
    "code": "MA70",
    "desc": "Missing/incomplete/invalid provider representative signature."
  },
  {
    "code": "MA71",
    "desc": "Missing/incomplete/invalid provider representative signature date."
  },
  {
    "code": "MA72",
    "desc": "Alert: The patient overpaid you for these assigned services. You must issue the patient a refund within 30 days for the difference between his/her payment to you and the total of the amount shown a..."
  },
  {
    "code": "MA73",
    "desc": "Informational remittance associated with a Medicare demonstration. No payment issued under fee-for-service Medicare as patient has elected managed care."
  },
  {
    "code": "MA74",
    "desc": "Alert: This payment replaces an earlier payment for this claim that was either lost, damaged or returned."
  },
  {
    "code": "MA75",
    "desc": "Missing/incomplete/invalid patient or authorized representative signature."
  },
  {
    "code": "MA76",
    "desc": "Missing/incomplete/invalid provider identifier for home health agency or hospice when physician is performing care plan oversight services."
  },
  {
    "code": "MA77",
    "desc": "Alert: The patient overpaid you. You must issue the patient a refund within 30 days for the difference between the patient's payment less the total of our and other payer payments and the amount sh..."
  },
  {
    "code": "MA79",
    "desc": "Billed in excess of interim rate."
  },
  {
    "code": "MA80",
    "desc": "Informational notice. No payment issued for this claim with this notice. Payment issued to the hospital by its intermediary for all services for this encounter under a demonstration project."
  },
  {
    "code": "MA81",
    "desc": "Missing/incomplete/invalid provider/supplier signature."
  },
  {
    "code": "MA83",
    "desc": "Did not indicate whether we are the primary or secondary payer."
  },
  {
    "code": "MA84",
    "desc": "Patient identified as participating in the National Emphysema Treatment Trial but our records indicate that this patient is either not a participant, or has not yet been approved for this phase of ..."
  },
  {
    "code": "MA88",
    "desc": "Missing/incomplete/invalid insured's address and/or telephone number for the primary payer."
  },
  {
    "code": "MA89",
    "desc": "Missing/incomplete/invalid patient's relationship to the insured for the primary payer."
  },
  {
    "code": "MA90",
    "desc": "Missing/incomplete/invalid employment status code for the primary insured."
  },
  {
    "code": "MA91",
    "desc": "Alert: This determination is the result of the appeal you filed."
  },
  {
    "code": "MA92",
    "desc": "Missing plan information for other insurance."
  },
  {
    "code": "MA93",
    "desc": "Non-PIP (Periodic Interim Payment) claim."
  },
  {
    "code": "MA94",
    "desc": "Did not enter the statement 'Attending physician not hospice employee' on the claim form to certify that the rendering physician is not an employee of the hospice."
  },
  {
    "code": "MA96",
    "desc": "Claim rejected. Coded as a Medicare Managed Care Demonstration but patient is not enrolled in a Medicare managed care plan."
  },
  {
    "code": "MA97",
    "desc": "Missing/incomplete/invalid Medicare Managed Care Demonstration contract number or clinical trial registry number."
  },
  {
    "code": "MA99",
    "desc": "Missing/incomplete/invalid Medigap information."
  },
  {
    "code": "MA100",
    "desc": "Missing/incomplete/invalid date of current illness or symptoms."
  },
  {
    "code": "MA103",
    "desc": "Hemophilia Add On."
  },
  {
    "code": "MA106",
    "desc": "PIP (Periodic Interim Payment) claim."
  },
  {
    "code": "MA107",
    "desc": "Paper claim contains more than three separate data items in field 19."
  },
  {
    "code": "MA108",
    "desc": "Paper claim contains more than one data item in field 23."
  },
  {
    "code": "MA109",
    "desc": "Claim processed in accordance with ambulatory surgical guidelines."
  },
  {
    "code": "MA110",
    "desc": "Missing/incomplete/invalid information on whether the diagnostic test(s) were performed by an outside entity or if no purchased tests are included on the claim."
  },
  {
    "code": "MA111",
    "desc": "Missing/incomplete/invalid purchase price of the test(s) and/or the performing laboratory's name and address."
  },
  {
    "code": "MA112",
    "desc": "Missing/incomplete/invalid group practice information."
  },
  {
    "code": "MA113",
    "desc": "Incomplete/invalid taxpayer identification number (TIN) submitted by you per the Internal Revenue Service. Your claims cannot be processed without your correct TIN, and you may not bill the patient..."
  },
  {
    "code": "MA114",
    "desc": "Missing/incomplete/invalid information on where the services were furnished."
  },
  {
    "code": "MA115",
    "desc": "Missing/incomplete/invalid physical location (name and address, or PIN) where the service(s) were rendered in a Health Professional Shortage Area (HPSA)."
  },
  {
    "code": "MA116",
    "desc": "Did not complete the statement 'Homebound' on the claim to validate whether laboratory services were performed at home or in an institution."
  },
  {
    "code": "MA117",
    "desc": "This claim has been assessed a $1.00 user fee."
  },
  {
    "code": "MA118",
    "desc": "Alert: No Medicare payment issued for this claim for services or supplies furnished to a Medicare-eligible veteran through a facility of the Department of Veterans Affairs. Coinsurance and/or deduc..."
  },
  {
    "code": "MA120",
    "desc": "Missing/incomplete/invalid CLIA certification number."
  },
  {
    "code": "MA121",
    "desc": "Missing/incomplete/invalid x-ray date."
  },
  {
    "code": "MA122",
    "desc": "Missing/incomplete/invalid initial treatment date."
  },
  {
    "code": "MA123",
    "desc": "Your center was not selected to participate in this study, therefore, we cannot pay for these services."
  },
  {
    "code": "MA125",
    "desc": "Per legislation governing this program, payment constitutes payment in full."
  },
  {
    "code": "MA126",
    "desc": "Pancreas transplant not covered unless kidney transplant performed."
  },
  {
    "code": "MA128",
    "desc": "Missing/incomplete/invalid FDA approval number."
  },
  {
    "code": "MA130",
    "desc": "Your claim contains incomplete and/or invalid information, and no appeal rights are afforded because the claim is unprocessable. Please submit a new claim with the complete/correct information."
  },
  {
    "code": "MA131",
    "desc": "Physician already paid for services in conjunction with this demonstration claim. You must have the physician withdraw that claim and refund the payment before we can process your claim."
  },
  {
    "code": "MA132",
    "desc": "Adjustment to the pre-demonstration rate."
  },
  {
    "code": "MA133",
    "desc": "Claim overlaps inpatient stay. Rebill only those services rendered outside the inpatient stay."
  },
  {
    "code": "MA134",
    "desc": "Missing/incomplete/invalid provider number of the facility where the patient resides."
  },
  {
    "code": "N1",
    "desc": "Alert: You may appeal this decision in writing within the required time limits following receipt of this notice by following the instructions included in your contract, plan benefit documents or ju..."
  },
  {
    "code": "N2",
    "desc": "This allowance has been made in accordance with the most appropriate course of treatment provision of the plan."
  },
  {
    "code": "N3",
    "desc": "Missing consent form."
  },
  {
    "code": "N4",
    "desc": "Missing/Incomplete/Invalid prior Insurance Carrier(s) EOB."
  },
  {
    "code": "N5",
    "desc": "EOB received from previous payer. Claim not on file."
  },
  {
    "code": "N6",
    "desc": "Under FEHB law (U.S.C. 8904(b)), we cannot pay more for covered care than the amount Medicare would have allowed if the patient were enrolled in Medicare Part A and/or Medicare Part B."
  },
  {
    "code": "N7",
    "desc": "Alert: Processing of this claim/service has included consideration under Major Medical provisions."
  },
  {
    "code": "N8",
    "desc": "Crossover claim denied by previous payer and complete claim data not forwarded. Resubmit this claim to this payer to provide adequate data for adjudication."
  },
  {
    "code": "N9",
    "desc": "Adjustment represents the estimated amount a previous payer may pay."
  },
  {
    "code": "N10",
    "desc": "Adjustment based on the findings of a review organization/professional consult/manual adjudication/medical advisor/dental advisor/peer review."
  },
  {
    "code": "N11",
    "desc": "Denial reversed because of medical review."
  },
  {
    "code": "N12",
    "desc": "Policy provides coverage supplemental to Medicare. As the member does not appear to be enrolled in the applicable part of Medicare, the member is responsible for payment of the portion of the charg..."
  },
  {
    "code": "N13",
    "desc": "Payment based on professional/technical component modifier(s)."
  },
  {
    "code": "N15",
    "desc": "Services for a newborn must be billed separately."
  },
  {
    "code": "N16",
    "desc": "Family/member Out-of-Pocket maximum has been met. Payment based on a higher percentage."
  },
  {
    "code": "N19",
    "desc": "Procedure code incidental to primary procedure."
  },
  {
    "code": "N20",
    "desc": "Service not payable with other service rendered on the same date."
  },
  {
    "code": "N21",
    "desc": "Alert: Your line item has been separated into multiple lines to expedite handling."
  },
  {
    "code": "N22",
    "desc": "Alert: This procedure code was added/changed because it more accurately describes the services rendered."
  },
  {
    "code": "N23",
    "desc": "Alert: Patient liability may be affected due to coordination of benefits with other carriers and/or maximum benefit provisions."
  },
  {
    "code": "N24",
    "desc": "Missing/incomplete/invalid Electronic Funds Transfer (EFT) banking information."
  },
  {
    "code": "N25",
    "desc": "This company has been contracted by your benefit plan to provide administrative claims payment services only. This company does not assume financial risk or obligation with respect to claims proces..."
  },
  {
    "code": "N26",
    "desc": "Missing itemized bill/statement."
  },
  {
    "code": "N27",
    "desc": "Missing/incomplete/invalid treatment number."
  },
  {
    "code": "N28",
    "desc": "Consent form requirements not fulfilled."
  },
  {
    "code": "N30",
    "desc": "Patient ineligible for this service."
  },
  {
    "code": "N31",
    "desc": "Missing/incomplete/invalid prescribing provider identifier."
  },
  {
    "code": "N32",
    "desc": "Claim must be submitted by the provider who rendered the service."
  },
  {
    "code": "N33",
    "desc": "No record of health check prior to initiation of treatment."
  },
  {
    "code": "N34",
    "desc": "Incorrect claim form/format for this service."
  },
  {
    "code": "N35",
    "desc": "Program integrity/utilization review decision."
  },
  {
    "code": "N36",
    "desc": "Claim must meet primary payer's processing requirements before we can consider payment."
  },
  {
    "code": "N37",
    "desc": "Missing/incomplete/invalid tooth number/letter."
  },
  {
    "code": "N39",
    "desc": "Procedure code is not compatible with tooth number/letter."
  },
  {
    "code": "N40",
    "desc": "Missing radiology film(s)/image(s)."
  },
  {
    "code": "N42",
    "desc": "Missing mental health assessment."
  },
  {
    "code": "N43",
    "desc": "Bed hold or leave days exceeded."
  },
  {
    "code": "N45",
    "desc": "Payment based on authorized amount."
  },
  {
    "code": "N46",
    "desc": "Missing/incomplete/invalid admission hour."
  },
  {
    "code": "N47",
    "desc": "Claim conflicts with another inpatient stay."
  },
  {
    "code": "N48",
    "desc": "Claim information does not agree with information received from other insurance carrier."
  },
  {
    "code": "N49",
    "desc": "Court ordered coverage information needs validation."
  },
  {
    "code": "N50",
    "desc": "Missing/incomplete/invalid discharge information."
  },
  {
    "code": "N51",
    "desc": "Electronic interchange agreement not on file for provider/submitter."
  },
  {
    "code": "N52",
    "desc": "Patient not enrolled in the billing provider's managed care plan on the date of service."
  },
  {
    "code": "N53",
    "desc": "Missing/incomplete/invalid point of pick-up address."
  },
  {
    "code": "N54",
    "desc": "Claim information is inconsistent with pre-certified/authorized services."
  },
  {
    "code": "N55",
    "desc": "Procedures for billing with group/referring/performing providers were not followed."
  },
  {
    "code": "N56",
    "desc": "Procedure code billed is not correct/valid for the services billed or the date of service billed."
  },
  {
    "code": "N57",
    "desc": "Missing/incomplete/invalid prescribing date."
  },
  {
    "code": "N58",
    "desc": "Missing/incomplete/invalid patient liability amount."
  },
  {
    "code": "N59",
    "desc": "Alert: Please refer to your provider manual for additional program and provider information."
  },
  {
    "code": "N61",
    "desc": "Rebill services on separate claims."
  },
  {
    "code": "N62",
    "desc": "Dates of service span multiple rate periods. Resubmit separate claims."
  },
  {
    "code": "N63",
    "desc": "Rebill services on separate claim lines."
  },
  {
    "code": "N64",
    "desc": "The 'from' and 'to' dates must be different."
  },
  {
    "code": "N65",
    "desc": "Procedure code or procedure rate count cannot be determined, or was not on file, for the date of service/provider."
  },
  {
    "code": "N67",
    "desc": "Professional provider services not paid separately. Included in facility payment under a demonstration project. Apply to that facility for payment, or resubmit your claim if: the facility notifies ..."
  },
  {
    "code": "N68",
    "desc": "Prior payment being cancelled as we were subsequently notified this patient was covered by a demonstration project in this site of service. Professional services were included in the payment made t..."
  },
  {
    "code": "N69",
    "desc": "Alert: PPS (Prospective Payment System) code changed by claims processing system."
  },
  {
    "code": "N70",
    "desc": "Consolidated billing and payment applies."
  },
  {
    "code": "N71",
    "desc": "Your unassigned claim for a drug or biological, clinical diagnostic laboratory services or ambulance service was processed as an assigned claim. You are required by law to accept assignment for the..."
  },
  {
    "code": "N72",
    "desc": "PPS (Prospective Payment System) code changed by medical reviewers. Not supported by clinical records."
  },
  {
    "code": "N74",
    "desc": "Resubmit with multiple claims, each claim covering services provided in only one calendar month."
  },
  {
    "code": "N75",
    "desc": "Missing/incomplete/invalid tooth surface information."
  },
  {
    "code": "N76",
    "desc": "Missing/incomplete/invalid number of riders."
  },
  {
    "code": "N77",
    "desc": "Missing/incomplete/invalid designated provider number."
  },
  {
    "code": "N78",
    "desc": "The necessary components of the child and teen checkup (EPSDT) were not completed."
  },
  {
    "code": "N79",
    "desc": "Service billed is not compatible with patient location information."
  },
  {
    "code": "N80",
    "desc": "Missing/incomplete/invalid prenatal screening information."
  },
  {
    "code": "N81",
    "desc": "Procedure billed is not compatible with tooth surface code."
  },
  {
    "code": "N82",
    "desc": "Provider must accept insurance payment as payment in full when a third party payer contract specifies full reimbursement."
  },
  {
    "code": "N83",
    "desc": "No appeal rights. Adjudicative decision based on the provisions of a demonstration project."
  },
  {
    "code": "N84",
    "desc": "Alert: Further installment payments are forthcoming."
  },
  {
    "code": "N85",
    "desc": "Alert: This is the final installment payment."
  },
  {
    "code": "N86",
    "desc": "A failed trial of pelvic muscle exercise training is required in order for biofeedback training for the treatment of urinary incontinence to be covered."
  },
  {
    "code": "N87",
    "desc": "Home use of biofeedback therapy is not covered."
  },
  {
    "code": "N88",
    "desc": "Alert: This payment is being made conditionally. An HHA episode of care notice has been filed for this patient. When a patient is treated under a HHA episode of care, consolidated billing requires ..."
  },
  {
    "code": "N89",
    "desc": "Alert: Payment information for this claim has been forwarded to more than one other payer, but format limitations permit only one of the secondary payers to be identified in this remittance advice."
  },
  {
    "code": "N90",
    "desc": "Covered only when performed by the attending physician."
  },
  {
    "code": "N91",
    "desc": "Services not included in the appeal review."
  },
  {
    "code": "N92",
    "desc": "This facility is not certified for digital mammography."
  },
  {
    "code": "N93",
    "desc": "A separate claim must be submitted for each place of service. Services furnished at multiple sites may not be billed in the same claim."
  },
  {
    "code": "N94",
    "desc": "Claim/Service denied because a more specific taxonomy code is required for adjudication."
  },
  {
    "code": "N95",
    "desc": "This provider type/provider specialty may not bill this service."
  },
  {
    "code": "N96",
    "desc": "Patient must be refractory to conventional therapy (documented behavioral, pharmacologic and/or surgical corrective therapy) and be an appropriate surgical candidate such that implantation with ane..."
  },
  {
    "code": "N97",
    "desc": "Patients with stress incontinence, urinary obstruction, and specific neurologic diseases (e.g., diabetes with peripheral nerve involvement) which are associated with secondary manifestations of the..."
  },
  {
    "code": "N98",
    "desc": "Patient must have had a successful test stimulation in order to support subsequent implantation. Before a patient is eligible for permanent implantation, he/she must demonstrate a 50 percent or gre..."
  },
  {
    "code": "N99",
    "desc": "Patient must be able to demonstrate adequate ability to record voiding diary data such that clinical results of the implant procedure can be properly evaluated."
  },
  {
    "code": "N103",
    "desc": "Records indicate this patient was a prisoner or in custody of a Federal, State, or local authority when the service was rendered. This payer does not cover items and services furnished to an indivi..."
  },
  {
    "code": "N104",
    "desc": "This claim/service is not payable under our claims jurisdiction area. You can identify the correct Medicare contractor to process this claim/service through the CMS website at www.cms.gov."
  },
  {
    "code": "N105",
    "desc": "This is a misdirected claim/service for an RRB beneficiary. Submit paper claims to the RRB carrier: Palmetto GBA, P.O. Box 10066, Augusta, GA 30999. Call 888-355-9165 for RRB EDI information for el..."
  },
  {
    "code": "N106",
    "desc": "Payment for services furnished to Skilled Nursing Facility (SNF) inpatients (except for excluded services) can only be made to the SNF. You must request payment from the SNF rather than the patient..."
  },
  {
    "code": "N107",
    "desc": "Services furnished to Skilled Nursing Facility (SNF) inpatients must be billed on the inpatient claim. They cannot be billed separately as outpatient services."
  },
  {
    "code": "N108",
    "desc": "Missing/incomplete/invalid upgrade information."
  },
  {
    "code": "N109",
    "desc": "Alert: This claim/service was chosen for complex review."
  },
  {
    "code": "N110",
    "desc": "This facility is not certified for film mammography."
  },
  {
    "code": "N111",
    "desc": "No appeal right except duplicate claim/service issue. This service was included in a claim that has been previously billed and adjudicated."
  },
  {
    "code": "N112",
    "desc": "This claim is excluded from your electronic remittance advice."
  },
  {
    "code": "N113",
    "desc": "Only one initial visit is covered per physician, group practice or provider."
  },
  {
    "code": "N114",
    "desc": "During the transition to the Ambulance Fee Schedule, payment is based on the lesser of a blended amount calculated using a percentage of the reasonable charge/cost and fee schedule amounts, or the ..."
  },
  {
    "code": "N115",
    "desc": "This decision was based on a Local Coverage Determination (LCD). An LCD provides a guide to assist in determining whether a particular item or service is covered. A copy of this policy is available..."
  },
  {
    "code": "N116",
    "desc": "Alert: This payment is being made conditionally because the service was provided in the home, and it is possible that the patient is under a home health episode of care. When a patient is treated u..."
  },
  {
    "code": "N117",
    "desc": "This service is paid only once in a patient's lifetime."
  },
  {
    "code": "N118",
    "desc": "This service is not paid if billed more than once every 28 days."
  },
  {
    "code": "N119",
    "desc": "This service is not paid if billed once every 28 days, and the patient has spent 5 or more consecutive days in any inpatient or Skilled /nursing Facility (SNF) within those 28 days."
  },
  {
    "code": "N120",
    "desc": "Payment is subject to home health prospective payment system partial episode payment adjustment. Patient was transferred/discharged/readmitted during payment episode."
  },
  {
    "code": "N121",
    "desc": "Medicare Part B does not pay for items or services provided by this type of practitioner for beneficiaries in a Medicare Part A covered Skilled Nursing Facility (SNF) stay."
  },
  {
    "code": "N122",
    "desc": "Add-on code cannot be billed by itself."
  },
  {
    "code": "N123",
    "desc": "Alert: This is a split service and represents a portion of the units from the originally submitted service."
  },
  {
    "code": "N124",
    "desc": "Payment has been denied for the/made only for a less extensive service/item because the information furnished does not substantiate the need for the (more extensive) service/item. The patient is li..."
  },
  {
    "code": "N125",
    "desc": "Payment has been (denied for the/made only for a less extensive) service/item because the information furnished does not substantiate the need for the (more extensive) service/item. If you have col..."
  },
  {
    "code": "N126",
    "desc": "Social Security Records indicate that this individual has been deported. This payer does not cover items and services furnished to individuals who have been deported."
  },
  {
    "code": "N127",
    "desc": "This is a misdirected claim/service for a United Mine Workers of America (UMWA) beneficiary. Please submit claims to them."
  },
  {
    "code": "N128",
    "desc": "This amount represents the prior to coverage portion of the allowance."
  },
  {
    "code": "N129",
    "desc": "Not eligible due to the patient's age."
  },
  {
    "code": "N130",
    "desc": "Consult plan benefit documents/guidelines for information about restrictions for this service."
  },
  {
    "code": "N131",
    "desc": "Total payments under multiple contracts cannot exceed the allowance for this service."
  },
  {
    "code": "N132",
    "desc": "Alert: Payments will cease for services rendered by this US Government debarred or excluded provider after the 30 day grace period as previously notified."
  },
  {
    "code": "N133",
    "desc": "Alert: Services for predetermination and services requesting payment are being processed separately."
  },
  {
    "code": "N134",
    "desc": "Alert: This represents your scheduled payment for this service. If treatment has been discontinued, please contact Customer Service."
  },
  {
    "code": "N135",
    "desc": "Record fees are the patient's responsibility and limited to the specified co-payment."
  },
  {
    "code": "N136",
    "desc": "Alert: To obtain information on the process to file an appeal in Arizona, call the Department's Consumer Assistance Office at (602) 912-8444 or (800) 325-2548."
  },
  {
    "code": "N137",
    "desc": "Alert: The provider acting on the Member's behalf, may file an appeal with the Payer. The provider, acting on the Member's behalf, may file a complaint with the State Insurance Regulatory Authority..."
  },
  {
    "code": "N138",
    "desc": "Alert: In the event you disagree with the Dental Advisor's opinion and have additional information relative to the case, you may submit radiographs to the Dental Advisor Unit at the subscriber's de..."
  },
  {
    "code": "N139",
    "desc": "Alert: Under 32 CFR 199.13, a non-participating provider is not an appropriate appealing party. Therefore, if you disagree with the Dental Advisor's opinion, you may appeal the determination if app..."
  },
  {
    "code": "N140",
    "desc": "Alert: You have not been designated as an authorized OCONUS provider therefore are not considered an appropriate appealing party. If the beneficiary has appointed you, in writing, to act as his/her..."
  },
  {
    "code": "N141",
    "desc": "The patient was not residing in a long-term care facility during all or part of the service dates billed."
  },
  {
    "code": "N142",
    "desc": "The original claim was denied. Resubmit a new claim, not a replacement claim."
  },
  {
    "code": "N143",
    "desc": "The patient was not in a hospice program during all or part of the service dates billed."
  },
  {
    "code": "N144",
    "desc": "The rate changed during the dates of service billed."
  },
  {
    "code": "N146",
    "desc": "Missing screening document."
  },
  {
    "code": "N147",
    "desc": "Long term care case mix or per diem rate cannot be determined because the patient ID number is missing, incomplete, or invalid on the assignment request."
  },
  {
    "code": "N148",
    "desc": "Missing/incomplete/invalid date of last menstrual period."
  },
  {
    "code": "N149",
    "desc": "Rebill all applicable services on a single claim."
  },
  {
    "code": "N150",
    "desc": "Missing/incomplete/invalid model number."
  },
  {
    "code": "N151",
    "desc": "Telephone contact services will not be paid until the face-to-face contact requirement has been met."
  },
  {
    "code": "N152",
    "desc": "Missing/incomplete/invalid replacement claim information."
  },
  {
    "code": "N153",
    "desc": "Missing/incomplete/invalid room and board rate."
  },
  {
    "code": "N154",
    "desc": "Alert: This payment was delayed for correction of provider's mailing address."
  },
  {
    "code": "N155",
    "desc": "Alert: Our records do not indicate that other insurance is on file. Please submit other insurance information for our records."
  },
  {
    "code": "N156",
    "desc": "Alert: The patient is responsible for the difference between the approved treatment and the elective treatment."
  },
  {
    "code": "N157",
    "desc": "Transportation to/from this destination is not covered."
  },
  {
    "code": "N158",
    "desc": "Transportation in a vehicle other than an ambulance is not covered."
  },
  {
    "code": "N159",
    "desc": "Payment denied/reduced because mileage is not covered when the patient is not in the ambulance."
  },
  {
    "code": "N160",
    "desc": "The patient must choose an option before a payment can be made for this procedure/ equipment/ supply/ service."
  },
  {
    "code": "N161",
    "desc": "This drug/service/supply is covered only when the associated service is covered."
  },
  {
    "code": "N162",
    "desc": "Alert: Although your claim was paid, you have billed for a test/specialty not included in your Laboratory Certification. Your failure to correct the laboratory certification information will result..."
  },
  {
    "code": "N163",
    "desc": "Medical record does not support code billed per the code definition."
  },
  {
    "code": "N167",
    "desc": "Charges exceed the post-transplant coverage limit."
  },
  {
    "code": "N170",
    "desc": "A new/revised/renewed certificate of medical necessity is needed."
  },
  {
    "code": "N171",
    "desc": "Payment for repair or replacement is not covered or has exceeded the purchase price."
  },
  {
    "code": "N172",
    "desc": "The patient is not liable for the denied/adjusted charge(s) for receiving any updated service/item."
  },
  {
    "code": "N173",
    "desc": "No qualifying hospital stay dates were provided for this episode of care."
  },
  {
    "code": "N174",
    "desc": "This is not a covered service/procedure/ equipment/bed, however patient liability is limited to amounts shown in the adjustments under group 'PR'."
  },
  {
    "code": "N175",
    "desc": "Missing review organization approval."
  },
  {
    "code": "N176",
    "desc": "Services provided aboard a ship are covered only when the ship is of United States registry and is in United States waters. In addition, a doctor licensed to practice in the United States must prov..."
  },
  {
    "code": "N177",
    "desc": "Alert: We did not send this claim to patient's other insurer. They have indicated no additional payment can be made."
  },
  {
    "code": "N178",
    "desc": "Missing pre-operative images/visual field results."
  },
  {
    "code": "N179",
    "desc": "Additional information has been requested from the member. The charges will be reconsidered upon receipt of that information."
  },
  {
    "code": "N180",
    "desc": "This item or service does not meet the criteria for the category under which it was billed."
  },
  {
    "code": "N181",
    "desc": "Additional information is required from another provider involved in this service."
  },
  {
    "code": "N182",
    "desc": "This claim/service must be billed according to the schedule for this plan."
  },
  {
    "code": "N183",
    "desc": "Alert: This is a predetermination advisory message, when this service is submitted for payment additional documentation as specified in plan documents will be required to process benefits."
  },
  {
    "code": "N184",
    "desc": "Rebill technical and professional components separately."
  },
  {
    "code": "N185",
    "desc": "Alert: Do not resubmit this claim/service."
  },
  {
    "code": "N186",
    "desc": "Non-Availability Statement (NAS) required for this service. Contact the nearest Military Treatment Facility (MTF) for assistance."
  },
  {
    "code": "N187",
    "desc": "Alert: You may request a review in writing within the required time limits following receipt of this notice by following the instructions included in your contract or plan benefit documents."
  },
  {
    "code": "N188",
    "desc": "The approved level of care does not match the procedure code submitted."
  },
  {
    "code": "N189",
    "desc": "Alert: This service has been paid as a one-time exception to the plan's benefit restrictions."
  },
  {
    "code": "N190",
    "desc": "Missing contract indicator."
  },
  {
    "code": "N191",
    "desc": "The provider must update insurance information directly with payer."
  },
  {
    "code": "N192",
    "desc": "Alert: Patient is a Medicaid/Qualified Medicare Beneficiary."
  },
  {
    "code": "N193",
    "desc": "Alert: Specific federal/state/local program may cover this service through another payer."
  },
  {
    "code": "N194",
    "desc": "Technical component not paid if provider does not own the equipment used."
  },
  {
    "code": "N195",
    "desc": "The technical component must be billed separately."
  },
  {
    "code": "N196",
    "desc": "Alert: Patient eligible to apply for other coverage which may be primary."
  },
  {
    "code": "N197",
    "desc": "The subscriber must update insurance information directly with payer."
  },
  {
    "code": "N198",
    "desc": "Rendering provider must be affiliated with the pay-to provider."
  },
  {
    "code": "N199",
    "desc": "Additional payment/recoupment approved based on payer-initiated review/audit."
  },
  {
    "code": "N200",
    "desc": "The professional component must be billed separately."
  },
  {
    "code": "N202",
    "desc": "Alert: Additional information/explanation will be sent separately."
  },
  {
    "code": "N203",
    "desc": "Missing/incomplete/invalid anesthesia time/units."
  },
  {
    "code": "N204",
    "desc": "Services under review for possible pre-existing condition. Send medical records for prior 12 months"
  },
  {
    "code": "N205",
    "desc": "Information provided was illegible."
  },
  {
    "code": "N206",
    "desc": "The supporting documentation does not match the information sent on the claim."
  },
  {
    "code": "N207",
    "desc": "Missing/incomplete/invalid weight."
  },
  {
    "code": "N208",
    "desc": "Missing/incomplete/invalid DRG code."
  },
  {
    "code": "N209",
    "desc": "Missing/incomplete/invalid taxpayer identification number (TIN)."
  },
  {
    "code": "N210",
    "desc": "Alert: You may appeal this decision."
  },
  {
    "code": "N211",
    "desc": "Alert: You may not appeal this decision."
  },
  {
    "code": "N212",
    "desc": "Charges processed under a Point of Service benefit."
  },
  {
    "code": "N213",
    "desc": "Missing/incomplete/invalid facility/discrete unit DRG/DRG exempt status information."
  },
  {
    "code": "N214",
    "desc": "Missing/incomplete/invalid history of the related initial surgical procedure(s)."
  },
  {
    "code": "N215",
    "desc": "Alert: A payer providing supplemental or secondary coverage shall not require a claims determination for this service from a primary payer as a condition of making its own claims determination."
  },
  {
    "code": "N216",
    "desc": "We do not offer coverage for this type of service or the patient is not enrolled in this portion of our benefit package."
  },
  {
    "code": "N217",
    "desc": "We pay only one site of service per provider per claim."
  },
  {
    "code": "N218",
    "desc": "You must furnish and service this item for as long as the patient continues to need it. We can pay for maintenance and/or servicing for the time period specified in the contract or coverage manual."
  },
  {
    "code": "N219",
    "desc": "Payment based on previous payer's allowed amount."
  },
  {
    "code": "N220",
    "desc": "Alert: See the payer's web site or contact the payer's Customer Service department to obtain forms and instructions for filing a provider dispute."
  },
  {
    "code": "N221",
    "desc": "Missing Admitting History and Physical report."
  },
  {
    "code": "N222",
    "desc": "Incomplete/invalid Admitting History and Physical report."
  },
  {
    "code": "N223",
    "desc": "Missing documentation of benefit to the patient during initial treatment period."
  },
  {
    "code": "N224",
    "desc": "Incomplete/invalid documentation of benefit to the patient during initial treatment period."
  },
  {
    "code": "N226",
    "desc": "Incomplete/invalid American Diabetes Association Certificate of Recognition."
  },
  {
    "code": "N227",
    "desc": "Incomplete/invalid Certificate of Medical Necessity."
  },
  {
    "code": "N228",
    "desc": "Incomplete/invalid consent form."
  },
  {
    "code": "N229",
    "desc": "Incomplete/invalid contract indicator."
  },
  {
    "code": "N230",
    "desc": "Incomplete/invalid indication of whether the patient owns the equipment that requires the part or supply."
  },
  {
    "code": "N231",
    "desc": "Incomplete/invalid invoice or statement certifying the actual cost of the lens, less discounts, and/or the type of intraocular lens used."
  },
  {
    "code": "N232",
    "desc": "Incomplete/invalid itemized bill/statement."
  },
  {
    "code": "N233",
    "desc": "Incomplete/invalid operative note/report."
  },
  {
    "code": "N234",
    "desc": "Incomplete/invalid oxygen certification/re-certification."
  },
  {
    "code": "N235",
    "desc": "Incomplete/invalid pacemaker registration form."
  },
  {
    "code": "N236",
    "desc": "Incomplete/invalid pathology report."
  },
  {
    "code": "N237",
    "desc": "Incomplete/invalid patient medical record for this service."
  },
  {
    "code": "N238",
    "desc": "Incomplete/invalid physician certified plan of care."
  },
  {
    "code": "N239",
    "desc": "Incomplete/invalid physician financial relationship form."
  },
  {
    "code": "N240",
    "desc": "Incomplete/invalid radiology report."
  },
  {
    "code": "N241",
    "desc": "Incomplete/invalid review organization approval."
  },
  {
    "code": "N242",
    "desc": "Incomplete/invalid radiology film(s)/image(s)."
  },
  {
    "code": "N243",
    "desc": "Incomplete/invalid/not approved screening document."
  },
  {
    "code": "N244",
    "desc": "Incomplete/Invalid pre-operative images/visual field results."
  },
  {
    "code": "N245",
    "desc": "Incomplete/invalid plan information for other insurance."
  },
  {
    "code": "N246",
    "desc": "State regulated patient payment limitations apply to this service."
  },
  {
    "code": "N247",
    "desc": "Missing/incomplete/invalid assistant surgeon taxonomy."
  },
  {
    "code": "N248",
    "desc": "Missing/incomplete/invalid assistant surgeon name."
  },
  {
    "code": "N249",
    "desc": "Missing/incomplete/invalid assistant surgeon primary identifier."
  },
  {
    "code": "N250",
    "desc": "Missing/incomplete/invalid assistant surgeon secondary identifier."
  },
  {
    "code": "N251",
    "desc": "Missing/incomplete/invalid attending provider taxonomy."
  },
  {
    "code": "N252",
    "desc": "Missing/incomplete/invalid attending provider name."
  },
  {
    "code": "N253",
    "desc": "Missing/incomplete/invalid attending provider primary identifier."
  },
  {
    "code": "N254",
    "desc": "Missing/incomplete/invalid attending provider secondary identifier."
  },
  {
    "code": "N255",
    "desc": "Missing/incomplete/invalid billing provider taxonomy."
  },
  {
    "code": "N256",
    "desc": "Missing/incomplete/invalid billing provider/supplier name."
  },
  {
    "code": "N257",
    "desc": "Missing/incomplete/invalid billing provider/supplier primary identifier."
  },
  {
    "code": "N258",
    "desc": "Missing/incomplete/invalid billing provider/supplier address."
  },
  {
    "code": "N259",
    "desc": "Missing/incomplete/invalid billing provider/supplier secondary identifier."
  },
  {
    "code": "N260",
    "desc": "Missing/incomplete/invalid billing provider/supplier contact information."
  },
  {
    "code": "N261",
    "desc": "Missing/incomplete/invalid operating provider name."
  },
  {
    "code": "N262",
    "desc": "Missing/incomplete/invalid operating provider primary identifier."
  },
  {
    "code": "N263",
    "desc": "Missing/incomplete/invalid operating provider secondary identifier."
  },
  {
    "code": "N264",
    "desc": "Missing/incomplete/invalid ordering provider name."
  },
  {
    "code": "N265",
    "desc": "Missing/incomplete/invalid ordering provider primary identifier."
  },
  {
    "code": "N266",
    "desc": "Missing/incomplete/invalid ordering provider address."
  },
  {
    "code": "N267",
    "desc": "Missing/incomplete/invalid ordering provider secondary identifier."
  },
  {
    "code": "N268",
    "desc": "Missing/incomplete/invalid ordering provider contact information."
  },
  {
    "code": "N269",
    "desc": "Missing/incomplete/invalid other provider name."
  },
  {
    "code": "N270",
    "desc": "Missing/incomplete/invalid other provider primary identifier."
  },
  {
    "code": "N271",
    "desc": "Missing/incomplete/invalid other provider secondary identifier."
  },
  {
    "code": "N272",
    "desc": "Missing/incomplete/invalid other payer attending provider identifier."
  },
  {
    "code": "N273",
    "desc": "Missing/incomplete/invalid other payer operating provider identifier."
  },
  {
    "code": "N274",
    "desc": "Missing/incomplete/invalid other payer other provider identifier."
  },
  {
    "code": "N275",
    "desc": "Missing/incomplete/invalid other payer purchased service provider identifier."
  },
  {
    "code": "N276",
    "desc": "Missing/incomplete/invalid other payer referring provider identifier."
  },
  {
    "code": "N277",
    "desc": "Missing/incomplete/invalid other payer rendering provider identifier."
  },
  {
    "code": "N278",
    "desc": "Missing/incomplete/invalid other payer service facility provider identifier."
  },
  {
    "code": "N279",
    "desc": "Missing/incomplete/invalid pay-to provider name."
  },
  {
    "code": "N280",
    "desc": "Missing/incomplete/invalid pay-to provider primary identifier."
  },
  {
    "code": "N281",
    "desc": "Missing/incomplete/invalid pay-to provider address."
  },
  {
    "code": "N282",
    "desc": "Missing/incomplete/invalid pay-to provider secondary identifier."
  },
  {
    "code": "N283",
    "desc": "Missing/incomplete/invalid purchased service provider identifier."
  },
  {
    "code": "N284",
    "desc": "Missing/incomplete/invalid referring provider taxonomy."
  },
  {
    "code": "N285",
    "desc": "Missing/incomplete/invalid referring provider name."
  },
  {
    "code": "N286",
    "desc": "Missing/incomplete/invalid referring provider primary identifier."
  },
  {
    "code": "N287",
    "desc": "Missing/incomplete/invalid referring provider secondary identifier."
  },
  {
    "code": "N288",
    "desc": "Missing/incomplete/invalid rendering provider taxonomy."
  },
  {
    "code": "N289",
    "desc": "Missing/incomplete/invalid rendering provider name."
  },
  {
    "code": "N290",
    "desc": "Missing/incomplete/invalid rendering provider primary identifier."
  },
  {
    "code": "N291",
    "desc": "Missing/incomplete/invalid rendering provider secondary identifier."
  },
  {
    "code": "N292",
    "desc": "Missing/incomplete/invalid service facility name."
  },
  {
    "code": "N293",
    "desc": "Missing/incomplete/invalid service facility primary identifier."
  },
  {
    "code": "N294",
    "desc": "Missing/incomplete/invalid service facility primary address."
  },
  {
    "code": "N295",
    "desc": "Missing/incomplete/invalid service facility secondary identifier."
  },
  {
    "code": "N296",
    "desc": "Missing/incomplete/invalid supervising provider name."
  },
  {
    "code": "N297",
    "desc": "Missing/incomplete/invalid supervising provider primary identifier."
  },
  {
    "code": "N298",
    "desc": "Missing/incomplete/invalid supervising provider secondary identifier."
  },
  {
    "code": "N299",
    "desc": "Missing/incomplete/invalid occurrence date(s)."
  },
  {
    "code": "N300",
    "desc": "Missing/incomplete/invalid occurrence span date(s)."
  },
  {
    "code": "N301",
    "desc": "Missing/incomplete/invalid procedure date(s)."
  },
  {
    "code": "N302",
    "desc": "Missing/incomplete/invalid other procedure date(s)."
  },
  {
    "code": "N303",
    "desc": "Missing/incomplete/invalid principal procedure date."
  },
  {
    "code": "N304",
    "desc": "Missing/incomplete/invalid dispensed date."
  },
  {
    "code": "N305",
    "desc": "Missing/incomplete/invalid injury/accident date."
  },
  {
    "code": "N306",
    "desc": "Missing/incomplete/invalid acute manifestation date."
  },
  {
    "code": "N307",
    "desc": "Missing/incomplete/invalid adjudication or payment date."
  },
  {
    "code": "N308",
    "desc": "Missing/incomplete/invalid appliance placement date."
  },
  {
    "code": "N309",
    "desc": "Missing/incomplete/invalid assessment date."
  },
  {
    "code": "N310",
    "desc": "Missing/incomplete/invalid assumed or relinquished care date."
  },
  {
    "code": "N311",
    "desc": "Missing/incomplete/invalid authorized to return to work date."
  },
  {
    "code": "N312",
    "desc": "Missing/incomplete/invalid begin therapy date."
  },
  {
    "code": "N313",
    "desc": "Missing/incomplete/invalid certification revision date."
  },
  {
    "code": "N314",
    "desc": "Missing/incomplete/invalid diagnosis date."
  },
  {
    "code": "N315",
    "desc": "Missing/incomplete/invalid disability from date."
  },
  {
    "code": "N316",
    "desc": "Missing/incomplete/invalid disability to date."
  },
  {
    "code": "N317",
    "desc": "Missing/incomplete/invalid discharge hour."
  },
  {
    "code": "N318",
    "desc": "Missing/incomplete/invalid discharge or end of care date."
  },
  {
    "code": "N319",
    "desc": "Missing/incomplete/invalid hearing or vision prescription date."
  },
  {
    "code": "N320",
    "desc": "Missing/incomplete/invalid Home Health Certification Period."
  },
  {
    "code": "N321",
    "desc": "Missing/incomplete/invalid last admission period."
  },
  {
    "code": "N322",
    "desc": "Missing/incomplete/invalid last certification date."
  },
  {
    "code": "N323",
    "desc": "Missing/incomplete/invalid last contact date."
  },
  {
    "code": "N324",
    "desc": "Missing/incomplete/invalid last seen/visit date."
  },
  {
    "code": "N325",
    "desc": "Missing/incomplete/invalid last worked date."
  },
  {
    "code": "N326",
    "desc": "Missing/incomplete/invalid last x-ray date."
  },
  {
    "code": "N327",
    "desc": "Missing/incomplete/invalid other insured birth date."
  },
  {
    "code": "N328",
    "desc": "Missing/incomplete/invalid Oxygen Saturation Test date."
  },
  {
    "code": "N329",
    "desc": "Missing/incomplete/invalid patient birth date."
  },
  {
    "code": "N330",
    "desc": "Missing/incomplete/invalid patient death date."
  },
  {
    "code": "N331",
    "desc": "Missing/incomplete/invalid physician order date."
  },
  {
    "code": "N332",
    "desc": "Missing/incomplete/invalid prior hospital discharge date."
  },
  {
    "code": "N333",
    "desc": "Missing/incomplete/invalid prior placement date."
  },
  {
    "code": "N334",
    "desc": "Missing/incomplete/invalid re-evaluation date."
  },
  {
    "code": "N335",
    "desc": "Missing/incomplete/invalid referral date."
  },
  {
    "code": "N336",
    "desc": "Missing/incomplete/invalid replacement date."
  },
  {
    "code": "N337",
    "desc": "Missing/incomplete/invalid secondary diagnosis date."
  },
  {
    "code": "N338",
    "desc": "Missing/incomplete/invalid shipped date."
  },
  {
    "code": "N339",
    "desc": "Missing/incomplete/invalid similar illness or symptom date."
  },
  {
    "code": "N340",
    "desc": "Missing/incomplete/invalid subscriber birth date."
  },
  {
    "code": "N341",
    "desc": "Missing/incomplete/invalid surgery date."
  },
  {
    "code": "N342",
    "desc": "Missing/incomplete/invalid test performed date."
  },
  {
    "code": "N343",
    "desc": "Missing/incomplete/invalid Transcutaneous Electrical Nerve Stimulator (TENS) trial start date."
  },
  {
    "code": "N344",
    "desc": "Missing/incomplete/invalid Transcutaneous Electrical Nerve Stimulator (TENS) trial end date."
  },
  {
    "code": "N345",
    "desc": "Date range not valid with units submitted."
  },
  {
    "code": "N346",
    "desc": "Missing/incomplete/invalid oral cavity designation code."
  },
  {
    "code": "N347",
    "desc": "Your claim for a referred or purchased service cannot be paid because payment has already been made for this same service to another provider by a payment contractor representing the payer."
  },
  {
    "code": "N348",
    "desc": "You chose that this service/supply/drug would be rendered/supplied and billed by a different practitioner/supplier."
  },
  {
    "code": "N349",
    "desc": "The administration method and drug must be reported to adjudicate this service."
  },
  {
    "code": "N350",
    "desc": "Missing/incomplete/invalid description of service for a Not Otherwise Classified (NOC) code or for an Unlisted/By Report procedure."
  },
  {
    "code": "N351",
    "desc": "Service date outside of the approved treatment plan service dates."
  },
  {
    "code": "N352",
    "desc": "Alert: There are no scheduled payments for this service. Submit a claim for each patient visit."
  },
  {
    "code": "N353",
    "desc": "Alert: Benefits have been estimated, when the actual services have been rendered, additional payment will be considered based on the submitted claim."
  },
  {
    "code": "N354",
    "desc": "Incomplete/invalid invoice."
  },
  {
    "code": "N355",
    "desc": "Alert: The law permits exceptions to the refund requirement in two cases: - If you did not know, and could not have reasonably been expected to know, that we would not pay for this service; or - If..."
  },
  {
    "code": "N356",
    "desc": "Not covered when performed with, or subsequent to, a non-covered service."
  },
  {
    "code": "N357",
    "desc": "Time frame requirements between this service/procedure/supply and a related service/procedure/supply have not been met."
  },
  {
    "code": "N358",
    "desc": "Alert: This decision may be reviewed if additional documentation as described in the contract or plan benefit documents is submitted."
  },
  {
    "code": "N359",
    "desc": "Missing/incomplete/invalid height."
  },
  {
    "code": "N360",
    "desc": "Alert: Coordination of benefits has not been calculated when estimating benefits for this pre-determination. Submit payment information from the primary payer with the secondary claim."
  },
  {
    "code": "N362",
    "desc": "The number of Days or Units of Service exceeds our acceptable maximum."
  },
  {
    "code": "N363",
    "desc": "Alert: in the near future we are implementing new policies/procedures that would affect this determination."
  },
  {
    "code": "N364",
    "desc": "Alert: According to our agreement, you must waive the deductible and/or coinsurance amounts."
  },
  {
    "code": "N366",
    "desc": "Requested information not provided. The claim will be reopened if the information previously requested is submitted within one year after the date of this denial notice."
  },
  {
    "code": "N367",
    "desc": "Alert: The claim information has been forwarded to a Consumer Spending Account processor for review; for example, flexible spending account or health savings account."
  },
  {
    "code": "N368",
    "desc": "You must appeal the determination of the previously adjudicated claim."
  },
  {
    "code": "N369",
    "desc": "Alert: Although this claim has been processed, it is deficient according to state legislation/regulation."
  },
  {
    "code": "N370",
    "desc": "Billing exceeds the rental months covered/approved by the payer."
  },
  {
    "code": "N371",
    "desc": "Alert: title of this equipment must be transferred to the patient."
  },
  {
    "code": "N372",
    "desc": "Only reasonable and necessary maintenance/service charges are covered."
  },
  {
    "code": "N373",
    "desc": "It has been determined that another payer paid the services as primary when they were not the primary payer. Therefore, we are refunding to the payer that paid as primary on your behalf."
  },
  {
    "code": "N374",
    "desc": "Primary Medicare Part A insurance has been exhausted and a Part B Remittance Advice is required."
  },
  {
    "code": "N375",
    "desc": "Missing/incomplete/invalid questionnaire/information required to determine dependent eligibility."
  },
  {
    "code": "N376",
    "desc": "Subscriber/patient is assigned to active military duty, therefore primary coverage may be TRICARE."
  },
  {
    "code": "N377",
    "desc": "Payment based on a processed replacement claim."
  },
  {
    "code": "N378",
    "desc": "Missing/incomplete/invalid prescription quantity."
  },
  {
    "code": "N379",
    "desc": "Claim level information does not match line level information."
  },
  {
    "code": "N380",
    "desc": "The original claim has been processed, submit a corrected claim."
  },
  {
    "code": "N381",
    "desc": "Alert: Consult our contractual agreement for restrictions/billing/payment information related to these charges."
  },
  {
    "code": "N382",
    "desc": "Missing/incomplete/invalid patient identifier."
  },
  {
    "code": "N383",
    "desc": "Not covered when deemed cosmetic."
  },
  {
    "code": "N384",
    "desc": "Records indicate that the referenced body part/tooth has been removed in a previous procedure."
  },
  {
    "code": "N385",
    "desc": "Notification of admission was not timely according to published plan procedures."
  },
  {
    "code": "N386",
    "desc": "This decision was based on a National Coverage Determination (NCD). An NCD provides a coverage determination as to whether a particular item or service is covered. A copy of this policy is availabl..."
  },
  {
    "code": "N387",
    "desc": "Alert: Submit this claim to the patient's other insurer for potential payment of supplemental benefits. We did not forward the claim information."
  },
  {
    "code": "N388",
    "desc": "Missing/incomplete/invalid prescription number."
  },
  {
    "code": "N389",
    "desc": "Duplicate prescription number submitted."
  },
  {
    "code": "N390",
    "desc": "This service/report cannot be billed separately."
  },
  {
    "code": "N391",
    "desc": "Missing emergency department records."
  },
  {
    "code": "N392",
    "desc": "Incomplete/invalid emergency department records."
  },
  {
    "code": "N393",
    "desc": "Missing progress notes/report."
  },
  {
    "code": "N394",
    "desc": "Incomplete/invalid progress notes/report."
  },
  {
    "code": "N395",
    "desc": "Missing laboratory report."
  },
  {
    "code": "N396",
    "desc": "Incomplete/invalid laboratory report."
  },
  {
    "code": "N397",
    "desc": "Benefits are not available for incomplete service(s)/undelivered item(s)."
  },
  {
    "code": "N398",
    "desc": "Missing elective consent form."
  },
  {
    "code": "N399",
    "desc": "Incomplete/invalid elective consent form."
  },
  {
    "code": "N400",
    "desc": "Alert: Electronically enabled providers should submit claims electronically."
  },
  {
    "code": "N401",
    "desc": "Missing periodontal charting."
  },
  {
    "code": "N402",
    "desc": "Incomplete/invalid periodontal charting."
  },
  {
    "code": "N403",
    "desc": "Missing facility certification."
  },
  {
    "code": "N404",
    "desc": "Incomplete/invalid facility certification."
  },
  {
    "code": "N405",
    "desc": "This service is only covered when the donor's insurer(s) do not provide coverage for the service."
  },
  {
    "code": "N406",
    "desc": "This service is only covered when the recipient's insurer(s) do not provide coverage for the service."
  },
  {
    "code": "N407",
    "desc": "You are not an approved submitter for this transmission format."
  },
  {
    "code": "N408",
    "desc": "This payer does not cover deductibles assessed by a previous payer."
  },
  {
    "code": "N409",
    "desc": "This service is related to an accidental injury and is not covered unless provided within a specific time frame from the date of the accident."
  },
  {
    "code": "N410",
    "desc": "Not covered unless the prescription changes."
  },
  {
    "code": "N411",
    "desc": "This service is allowed one time in a 6-month period."
  },
  {
    "code": "N412",
    "desc": "This service is allowed 2 times in a 12-month period."
  },
  {
    "code": "N413",
    "desc": "This service is allowed 2 times in a benefit year."
  },
  {
    "code": "N414",
    "desc": "This service is allowed 4 times in a 12-month period."
  },
  {
    "code": "N415",
    "desc": "This service is allowed 1 time in an 18-month period."
  },
  {
    "code": "N416",
    "desc": "This service is allowed 1 time in a 3-year period."
  },
  {
    "code": "N417",
    "desc": "This service is allowed 1 time in a 5-year period."
  },
  {
    "code": "N418",
    "desc": "Misrouted claim. See the payer's claim submission instructions."
  },
  {
    "code": "N419",
    "desc": "Claim payment was the result of a payer's retroactive adjustment due to a retroactive rate change."
  },
  {
    "code": "N420",
    "desc": "Claim payment was the result of a payer's retroactive adjustment due to a Coordination of Benefits or Third Party Liability Recovery."
  },
  {
    "code": "N421",
    "desc": "Claim payment was the result of a payer's retroactive adjustment due to a review organization decision."
  },
  {
    "code": "N422",
    "desc": "Claim payment was the result of a payer's retroactive adjustment due to a payer's contract incentive program."
  },
  {
    "code": "N423",
    "desc": "Claim payment was the result of a payer's retroactive adjustment due to a non standard program."
  },
  {
    "code": "N424",
    "desc": "Patient does not reside in the geographic area required for this type of payment."
  },
  {
    "code": "N425",
    "desc": "Statutorily excluded service(s)."
  },
  {
    "code": "N426",
    "desc": "No coverage when self-administered."
  },
  {
    "code": "N427",
    "desc": "Payment for eyeglasses or contact lenses can be made only after cataract surgery."
  },
  {
    "code": "N428",
    "desc": "Not covered when performed in this place of service."
  },
  {
    "code": "N429",
    "desc": "Not covered when considered routine."
  },
  {
    "code": "N430",
    "desc": "Procedure code is inconsistent with the units billed."
  },
  {
    "code": "N431",
    "desc": "Not covered with this procedure."
  },
  {
    "code": "N432",
    "desc": "Alert: Adjustment based on a Recovery Audit."
  },
  {
    "code": "N433",
    "desc": "Resubmit this claim using only your National Provider Identifier (NPI)."
  },
  {
    "code": "N434",
    "desc": "Missing/Incomplete/Invalid Present on Admission indicator."
  },
  {
    "code": "N435",
    "desc": "Exceeds number/frequency approved /allowed within time period without support documentation."
  },
  {
    "code": "N436",
    "desc": "The injury claim has not been accepted and a mandatory medical reimbursement has been made."
  },
  {
    "code": "N437",
    "desc": "Alert: If the injury claim is accepted, these charges will be reconsidered."
  },
  {
    "code": "N438",
    "desc": "This jurisdiction only accepts paper claims."
  },
  {
    "code": "N439",
    "desc": "Missing anesthesia physical status report/indicators."
  },
  {
    "code": "N440",
    "desc": "Incomplete/invalid anesthesia physical status report/indicators."
  },
  {
    "code": "N441",
    "desc": "This missed/cancelled appointment is not covered."
  },
  {
    "code": "N442",
    "desc": "Payment based on an alternate fee schedule."
  },
  {
    "code": "N443",
    "desc": "Missing/incomplete/invalid total time or begin/end time."
  },
  {
    "code": "N444",
    "desc": "Alert: This facility has not filed the Election for High Cost Outlier form with the Division of Workers' Compensation."
  },
  {
    "code": "N445",
    "desc": "Missing document for actual cost or paid amount."
  },
  {
    "code": "N446",
    "desc": "Incomplete/invalid document for actual cost or paid amount."
  },
  {
    "code": "N447",
    "desc": "Payment is based on a generic equivalent as required documentation was not provided."
  },
  {
    "code": "N448",
    "desc": "This drug/service/supply is not included in the fee schedule or contracted/legislated fee arrangement."
  },
  {
    "code": "N449",
    "desc": "Payment based on a comparable drug/service/supply."
  },
  {
    "code": "N450",
    "desc": "Covered only when performed by the primary treating physician or the designee."
  },
  {
    "code": "N451",
    "desc": "Missing Admission Summary Report."
  },
  {
    "code": "N452",
    "desc": "Incomplete/invalid Admission Summary Report."
  },
  {
    "code": "N453",
    "desc": "Missing Consultation Report."
  },
  {
    "code": "N454",
    "desc": "Incomplete/invalid Consultation Report."
  },
  {
    "code": "N455",
    "desc": "Missing Physician Order."
  },
  {
    "code": "N456",
    "desc": "Incomplete/invalid Physician Order."
  },
  {
    "code": "N457",
    "desc": "Missing Diagnostic Report."
  },
  {
    "code": "N458",
    "desc": "Incomplete/invalid Diagnostic Report."
  },
  {
    "code": "N459",
    "desc": "Missing Discharge Summary."
  },
  {
    "code": "N460",
    "desc": "Incomplete/invalid Discharge Summary."
  },
  {
    "code": "N461",
    "desc": "Missing Nursing Notes."
  },
  {
    "code": "N462",
    "desc": "Incomplete/invalid Nursing Notes."
  },
  {
    "code": "N463",
    "desc": "Missing support data for claim."
  },
  {
    "code": "N464",
    "desc": "Incomplete/invalid support data for claim."
  },
  {
    "code": "N465",
    "desc": "Missing Physical Therapy Notes/Report."
  },
  {
    "code": "N466",
    "desc": "Incomplete/invalid Physical Therapy Notes/Report."
  },
  {
    "code": "N467",
    "desc": "Missing Tests and Analysis Report."
  },
  {
    "code": "N468",
    "desc": "Incomplete/invalid Report of Tests and Analysis Report."
  },
  {
    "code": "N469",
    "desc": "Alert: Claim/Service(s) subject to appeal process, see section 935 of Medicare Prescription Drug, Improvement, and Modernization Act of 2003 (MMA)."
  },
  {
    "code": "N470",
    "desc": "This payment will complete the mandatory medical reimbursement limit."
  },
  {
    "code": "N471",
    "desc": "Missing/incomplete/invalid HIPPS Rate Code."
  },
  {
    "code": "N472",
    "desc": "Payment for this service has been issued to another provider."
  },
  {
    "code": "N473",
    "desc": "Missing certification."
  },
  {
    "code": "N474",
    "desc": "Incomplete/invalid certification."
  },
  {
    "code": "N475",
    "desc": "Missing completed referral form."
  },
  {
    "code": "N476",
    "desc": "Incomplete/invalid completed referral form."
  },
  {
    "code": "N477",
    "desc": "Missing Dental Models."
  },
  {
    "code": "N478",
    "desc": "Incomplete/invalid Dental Models."
  },
  {
    "code": "N479",
    "desc": "Missing Explanation of Benefits (Coordination of Benefits or Medicare Secondary Payer)."
  },
  {
    "code": "N480",
    "desc": "Incomplete/invalid Explanation of Benefits (Coordination of Benefits or Medicare Secondary Payer)."
  },
  {
    "code": "N481",
    "desc": "Missing Models."
  },
  {
    "code": "N482",
    "desc": "Incomplete/invalid Models."
  },
  {
    "code": "N485",
    "desc": "Missing Physical Therapy Certification."
  },
  {
    "code": "N486",
    "desc": "Incomplete/invalid Physical Therapy Certification."
  },
  {
    "code": "N487",
    "desc": "Missing Prosthetics or Orthotics Certification."
  },
  {
    "code": "N488",
    "desc": "Incomplete/invalid Prosthetics or Orthotics Certification."
  },
  {
    "code": "N489",
    "desc": "Missing referral form."
  },
  {
    "code": "N490",
    "desc": "Incomplete/invalid referral form."
  },
  {
    "code": "N491",
    "desc": "Missing/Incomplete/Invalid Exclusionary Rider Condition."
  },
  {
    "code": "N492",
    "desc": "Alert: A network provider may bill the member for this service if the member requested the service and agreed in writing, prior to receiving the service, to be financially responsible for the bille..."
  },
  {
    "code": "N493",
    "desc": "Missing Doctor First Report of Injury."
  },
  {
    "code": "N494",
    "desc": "Incomplete/invalid Doctor First Report of Injury."
  },
  {
    "code": "N495",
    "desc": "Missing Supplemental Medical Report."
  },
  {
    "code": "N496",
    "desc": "Incomplete/invalid Supplemental Medical Report."
  },
  {
    "code": "N497",
    "desc": "Missing Medical Permanent Impairment or Disability Report."
  },
  {
    "code": "N498",
    "desc": "Incomplete/invalid Medical Permanent Impairment or Disability Report."
  },
  {
    "code": "N499",
    "desc": "Missing Medical Legal Report."
  },
  {
    "code": "N500",
    "desc": "Incomplete/invalid Medical Legal Report."
  },
  {
    "code": "N501",
    "desc": "Missing Vocational Report."
  },
  {
    "code": "N502",
    "desc": "Incomplete/invalid Vocational Report."
  },
  {
    "code": "N503",
    "desc": "Missing Work Status Report."
  },
  {
    "code": "N504",
    "desc": "Incomplete/invalid Work Status Report."
  },
  {
    "code": "N505",
    "desc": "Alert: This response includes only services that could be estimated in real-time. No estimate will be provided for the services that could not be estimated in real-time."
  },
  {
    "code": "N506",
    "desc": "Alert: This is an estimate of the member's liability based on the information available at the time the estimate was processed. Actual coverage and member liability amounts will be determined when ..."
  },
  {
    "code": "N507",
    "desc": "Plan distance requirements have not been met."
  },
  {
    "code": "N508",
    "desc": "Alert: This real-time claim adjudication response represents the member responsibility to the provider for services reported. The member will receive an Explanation of Benefits electronically or in..."
  },
  {
    "code": "N509",
    "desc": "Alert: A current inquiry shows the member's Consumer Spending Account contains sufficient funds to cover the member liability for this claim/service. Actual payment from the Consumer Spending Accou..."
  },
  {
    "code": "N510",
    "desc": "Alert: A current inquiry shows the member's Consumer Spending Account does not contain sufficient funds to cover the member's liability for this claim/service. Actual payment from the Consumer Spen..."
  },
  {
    "code": "N511",
    "desc": "Alert: Information on the availability of Consumer Spending Account funds to cover the member liability on this claim/service is not available at this time."
  },
  {
    "code": "N512",
    "desc": "Alert: This is the initial remit of a non-NCPDP claim originally submitted real-time without change to the adjudication."
  },
  {
    "code": "N513",
    "desc": "Alert: This is the initial remit of a non-NCPDP claim originally submitted real-time with a change to the adjudication."
  },
  {
    "code": "N516",
    "desc": "Records indicate a mismatch between the submitted NPI and EIN."
  },
  {
    "code": "N517",
    "desc": "Resubmit a new claim with the requested information."
  },
  {
    "code": "N518",
    "desc": "No separate payment for accessories when furnished for use with oxygen equipment."
  },
  {
    "code": "N519",
    "desc": "Invalid combination of HCPCS modifiers."
  },
  {
    "code": "N520",
    "desc": "Alert: Payment made from a Consumer Spending Account."
  },
  {
    "code": "N521",
    "desc": "Mismatch between the submitted provider information and the provider information stored in our system."
  },
  {
    "code": "N522",
    "desc": "Duplicate of a claim processed, or to be processed, as a crossover claim."
  },
  {
    "code": "N523",
    "desc": "The limitation on outlier payments defined by this payer for this service period has been met. The outlier payment otherwise applicable to this claim has not been paid."
  },
  {
    "code": "N524",
    "desc": "Based on policy this payment constitutes payment in full."
  },
  {
    "code": "N525",
    "desc": "These services are not covered when performed within the global period of another service."
  },
  {
    "code": "N526",
    "desc": "Not qualified for recovery based on employer size."
  },
  {
    "code": "N527",
    "desc": "We processed this claim as the primary payer prior to receiving the recovery demand."
  },
  {
    "code": "N528",
    "desc": "Patient is entitled to benefits for Institutional Services only."
  },
  {
    "code": "N529",
    "desc": "Patient is entitled to benefits for Professional Services only."
  },
  {
    "code": "N530",
    "desc": "Not Qualified for Recovery based on enrollment information."
  },
  {
    "code": "N531",
    "desc": "Not qualified for recovery based on direct payment of premium."
  },
  {
    "code": "N532",
    "desc": "Not qualified for recovery based on disability and working status."
  },
  {
    "code": "N533",
    "desc": "Services performed in an Indian Health Services facility under a self-insured tribal Group Health Plan."
  },
  {
    "code": "N534",
    "desc": "This is an individual policy, the employer does not participate in plan sponsorship."
  },
  {
    "code": "N535",
    "desc": "Payment is adjusted when procedure is performed in this place of service based on the submitted procedure code and place of service."
  },
  {
    "code": "N536",
    "desc": "We are not changing the prior payer's determination of patient responsibility, which you may collect, as this service is not covered by us."
  },
  {
    "code": "N537",
    "desc": "We have examined claims history and no records of the services have been found."
  },
  {
    "code": "N538",
    "desc": "A facility is responsible for payment to outside providers who furnish these services/supplies/drugs to its patients/residents."
  },
  {
    "code": "N539",
    "desc": "Alert: We processed appeals/waiver requests on your behalf and that request has been denied."
  },
  {
    "code": "N540",
    "desc": "Payment adjusted based on the interrupted stay policy."
  },
  {
    "code": "N541",
    "desc": "Mismatch between the submitted insurance type code and the information stored in our system."
  },
  {
    "code": "N542",
    "desc": "Missing income verification."
  },
  {
    "code": "N543",
    "desc": "Incomplete/invalid income verification."
  },
  {
    "code": "N544",
    "desc": "Alert: Although this was paid, you have billed with a referring/ordering provider that does not match our system record. Unless corrected this will not be paid in the future."
  },
  {
    "code": "N545",
    "desc": "Payment reduced based on status as an unsuccessful eprescriber per the Electronic Prescribing (eRx) Incentive Program."
  },
  {
    "code": "N546",
    "desc": "Payment represents a previous reduction based on the Electronic Prescribing (eRx) Incentive Program."
  },
  {
    "code": "N547",
    "desc": "A refund request (Frequency Type Code 8) was processed previously."
  },
  {
    "code": "N548",
    "desc": "Alert: Patient's calendar year deductible has been met."
  },
  {
    "code": "N549",
    "desc": "Alert: Patient's calendar year out-of-pocket maximum has been met."
  },
  {
    "code": "N550",
    "desc": "Alert: You have not responded to requests to revalidate your provider/supplier enrollment information. Your failure to revalidate your enrollment information will result in a payment hold in the ne..."
  },
  {
    "code": "N551",
    "desc": "Payment adjusted based on the Ambulatory Surgical Center (ASC) Quality Reporting Program."
  },
  {
    "code": "N552",
    "desc": "Payment adjusted to reverse a previous withhold/bonus amount."
  },
  {
    "code": "N554",
    "desc": "Missing/Incomplete/Invalid Family Planning Indicator."
  },
  {
    "code": "N555",
    "desc": "Missing medication list."
  },
  {
    "code": "N556",
    "desc": "Incomplete/invalid medication list."
  },
  {
    "code": "N557",
    "desc": "This claim/service is not payable under our service area. The claim must be filed to the Payer/Plan in whose service area the specimen was collected."
  },
  {
    "code": "N558",
    "desc": "This claim/service is not payable under our service area. The claim must be filed to the Payer/Plan in whose service area the equipment was received."
  },
  {
    "code": "N559",
    "desc": "This claim/service is not payable under our service area. The claim must be filed to the Payer/Plan in whose service area the Ordering Physician is located."
  },
  {
    "code": "N560",
    "desc": "The pilot program requires an interim or final claim within 60 days of the Notice of Admission. A claim was not received."
  },
  {
    "code": "N561",
    "desc": "The bundled claim originally submitted for this episode of care includes related readmissions. You may resubmit the original claim to receive a corrected payment based on this readmission."
  },
  {
    "code": "N562",
    "desc": "The provider number of your incoming claim does not match the provider number on the processed Notice of Admission (NOA) for this bundled payment."
  },
  {
    "code": "N563",
    "desc": "Alert: Missing required provider/supplier issuance of advance patient notice of non-coverage. The patient is not liable for payment for this service."
  },
  {
    "code": "N564",
    "desc": "Patient did not meet the inclusion criteria for the demonstration project or pilot program."
  },
  {
    "code": "N565",
    "desc": "Alert: This non-payable reporting code requires a modifier. Future claims containing this non-payable reporting code must include an appropriate modifier for the claim to be processed."
  },
  {
    "code": "N566",
    "desc": "Alert: This procedure code requires functional reporting. Future claims containing this procedure code must include an applicable non-payable code and appropriate modifiers for the claim to be proc..."
  },
  {
    "code": "N567",
    "desc": "Not covered when considered preventative."
  },
  {
    "code": "N568",
    "desc": "Alert: Initial payment based on the Notice of Admission (NOA) under the Bundled Payment Model IV initiative."
  },
  {
    "code": "N569",
    "desc": "Not covered when performed for the reported diagnosis."
  },
  {
    "code": "N570",
    "desc": "Missing/incomplete/invalid credentialing data."
  },
  {
    "code": "N571",
    "desc": "Alert: Payment will be issued quarterly by another payer/contractor."
  },
  {
    "code": "N572",
    "desc": "This procedure is not payable unless appropriate non-payable reporting codes and associated modifiers are submitted."
  },
  {
    "code": "N573",
    "desc": "Alert: You have been overpaid and must refund the overpayment. The refund will be requested separately by another payer/contractor."
  },
  {
    "code": "N574",
    "desc": "Our records indicate the ordering/referring provider is of a type/specialty that cannot order or refer. Please verify that the claim ordering/referring provider information is accurate or contact t..."
  },
  {
    "code": "N575",
    "desc": "Mismatch between the submitted ordering/referring provider name and the ordering/referring provider name stored in our records."
  },
  {
    "code": "N576",
    "desc": "Services not related to the specific incident/claim/accident/loss being reported."
  },
  {
    "code": "N577",
    "desc": "Personal Injury Protection (PIP) Coverage."
  },
  {
    "code": "N578",
    "desc": "Coverages do not apply to this loss."
  },
  {
    "code": "N579",
    "desc": "Medical Payments Coverage (MPC)."
  },
  {
    "code": "N580",
    "desc": "Determination based on the provisions of the insurance policy."
  },
  {
    "code": "N581",
    "desc": "Investigation of coverage eligibility is pending."
  },
  {
    "code": "N582",
    "desc": "Benefits suspended pending the patient's cooperation."
  },
  {
    "code": "N583",
    "desc": "Patient was not an occupant of our insured vehicle and therefore, is not an eligible injured person."
  },
  {
    "code": "N584",
    "desc": "Not covered based on the insured's noncompliance with policy or statutory conditions."
  },
  {
    "code": "N585",
    "desc": "Benefits are no longer available based on a final injury settlement."
  },
  {
    "code": "N586",
    "desc": "The injured party does not qualify for benefits."
  },
  {
    "code": "N587",
    "desc": "Policy benefits have been exhausted."
  },
  {
    "code": "N588",
    "desc": "The patient has instructed that medical claims/bills are not to be paid."
  },
  {
    "code": "N589",
    "desc": "Coverage is excluded to any person injured as a result of operating a motor vehicle while in an intoxicated condition or while the ability to operate such a vehicle is impaired by the use of a drug."
  },
  {
    "code": "N590",
    "desc": "Missing independent medical exam detailing the cause of injuries sustained and medical necessity of services rendered."
  },
  {
    "code": "N591",
    "desc": "Payment based on an Independent Medical Examination (IME) or Utilization Review (UR)."
  },
  {
    "code": "N592",
    "desc": "Adjusted because this is not the initial prescription or exceeds the amount allowed for the initial prescription."
  },
  {
    "code": "N593",
    "desc": "Not covered based on failure to attend a scheduled Independent Medical Exam (IME)."
  },
  {
    "code": "N594",
    "desc": "Records reflect the injured party did not complete an Application for Benefits for this loss."
  },
  {
    "code": "N595",
    "desc": "Records reflect the injured party did not complete an Assignment of Benefits for this loss."
  },
  {
    "code": "N596",
    "desc": "Records reflect the injured party did not complete a Medical Authorization for this loss."
  },
  {
    "code": "N597",
    "desc": "Adjusted based on a medical/dental provider's apportionment of care between related injuries and other unrelated medical/dental conditions/injuries."
  },
  {
    "code": "N598",
    "desc": "Health care policy coverage is primary."
  },
  {
    "code": "N599",
    "desc": "Our payment for this service is based upon a reasonable amount pursuant to both the terms and conditions of the policy of insurance under which the subject claim is being made as well as the Florid..."
  },
  {
    "code": "N600",
    "desc": "Adjusted based on the applicable fee schedule for the region in which the service was rendered."
  },
  {
    "code": "N601",
    "desc": "In accordance with Hawaii Administrative Rules, Title 16, Chapter 23 Motor Vehicle Insurance Law payment is recommended based on Medicare Resource Based Relative Value Scale System applicable to Ha..."
  },
  {
    "code": "N602",
    "desc": "Adjusted based on the Redbook maximum allowance."
  },
  {
    "code": "N603",
    "desc": "This fee is calculated according to the New Jersey medical fee schedules for Automobile Personal Injury Protection and Motor Bus Medical Expense Insurance Coverage."
  },
  {
    "code": "N604",
    "desc": "In accordance with New York No-Fault Law, Regulation 68, this base fee was calculated according to the New York Workers' Compensation Board Schedule of Medical Fees, pursuant to Regulation 83 and /..."
  },
  {
    "code": "N605",
    "desc": "This fee was calculated based upon New York All Patients Refined Diagnosis Related Groups (APR-DRG), pursuant to Regulation 68."
  },
  {
    "code": "N606",
    "desc": "The Oregon allowed amount for this procedure is based upon the Workers Compensation Fee Schedule (OAR 436-009). The allowed amount has been calculated in accordance with Section 4 of ORS 742.524."
  },
  {
    "code": "N607",
    "desc": "Service provided for non-compensable condition(s)."
  },
  {
    "code": "N608",
    "desc": "The fee schedule amount allowed is calculated at 110% of the Medicare Fee Schedule for this region, specialty and type of service. This fee is calculated in compliance with Act 6."
  },
  {
    "code": "N609",
    "desc": "80% of the provider's billed amount is being recommended for payment according to Act 6."
  },
  {
    "code": "N610",
    "desc": "Alert: Payment based on an appropriate level of care."
  },
  {
    "code": "N611",
    "desc": "Claim in litigation. Contact insurer for more information."
  },
  {
    "code": "N612",
    "desc": "Medical provider not authorized/certified to provide treatment to injured workers in this jurisdiction."
  },
  {
    "code": "N613",
    "desc": "Alert: Although this was paid, you have billed with an ordering provider that needs to update their enrollment record. Please verify that the ordering provider information you submitted on the clai..."
  },
  {
    "code": "N614",
    "desc": "Alert: Additional information is included in the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information)."
  },
  {
    "code": "N615",
    "desc": "Alert: This enrollee receiving advance payments of the premium tax credit is in the grace period of three consecutive months for non-payment of premium. Under 45 CFR 156.270, a Qualified Health Pla..."
  },
  {
    "code": "N616",
    "desc": "Alert: This enrollee is in the first month of the advance premium tax credit grace period."
  },
  {
    "code": "N617",
    "desc": "This enrollee is in the second or third month of the advance premium tax credit grace period."
  },
  {
    "code": "N618",
    "desc": "Alert: This claim will automatically be reprocessed if the enrollee pays their premiums."
  },
  {
    "code": "N619",
    "desc": "Coverage terminated for non-payment of premium."
  },
  {
    "code": "N620",
    "desc": "Alert: This procedure code is for quality reporting/informational purposes only."
  },
  {
    "code": "N621",
    "desc": "Charges for Jurisdiction required forms, reports, or chart notes are not payable."
  },
  {
    "code": "N622",
    "desc": "Not covered based on the date of injury/accident."
  },
  {
    "code": "N623",
    "desc": "Not covered when deemed unscientific/unproven/outmoded/experimental/excessive/inappropriate."
  },
  {
    "code": "N624",
    "desc": "The associated Workers' Compensation claim has been withdrawn."
  },
  {
    "code": "N625",
    "desc": "Missing/Incomplete/Invalid Workers' Compensation Claim Number."
  },
  {
    "code": "N626",
    "desc": "New or established patient E/M codes are not payable with chiropractic care codes."
  },
  {
    "code": "N628",
    "desc": "Out-patient follow up visits on the same date of service as a scheduled test or treatment is disallowed."
  },
  {
    "code": "N629",
    "desc": "Reviews/documentation/notes/summaries/reports/charts not requested."
  },
  {
    "code": "N630",
    "desc": "Referral not authorized by attending physician."
  },
  {
    "code": "N631",
    "desc": "Medical Fee Schedule does not list this code. An allowance was made for a comparable service."
  },
  {
    "code": "N633",
    "desc": "Additional anesthesia time units are not allowed."
  },
  {
    "code": "N634",
    "desc": "The allowance is calculated based on anesthesia time units."
  },
  {
    "code": "N635",
    "desc": "The Allowance is calculated based on the anesthesia base units plus time."
  },
  {
    "code": "N636",
    "desc": "Adjusted because this is reimbursable only once per injury."
  },
  {
    "code": "N637",
    "desc": "Consultations are not allowed once treatment has been rendered by the same provider."
  },
  {
    "code": "N638",
    "desc": "Reimbursement has been made according to the home health fee schedule."
  },
  {
    "code": "N639",
    "desc": "Reimbursement has been made according to the inpatient rehabilitation facilities fee schedule."
  },
  {
    "code": "N640",
    "desc": "Exceeds number/frequency approved/allowed within time period."
  },
  {
    "code": "N641",
    "desc": "Reimbursement has been based on the number of body areas rated."
  },
  {
    "code": "N642",
    "desc": "Adjusted when billed as individual tests instead of as a panel."
  },
  {
    "code": "N643",
    "desc": "The services billed are considered Not Covered or Non-Covered (NC) in the applicable state fee schedule."
  },
  {
    "code": "N644",
    "desc": "Reimbursement has been made according to the bilateral procedure rule."
  },
  {
    "code": "N645",
    "desc": "Mark-up allowance."
  },
  {
    "code": "N646",
    "desc": "Reimbursement has been adjusted based on the guidelines for an assistant."
  },
  {
    "code": "N647",
    "desc": "Adjusted based on diagnosis-related group (DRG)."
  },
  {
    "code": "N648",
    "desc": "Adjusted based on Stop Loss."
  },
  {
    "code": "N649",
    "desc": "Payment based on invoice."
  },
  {
    "code": "N650",
    "desc": "This policy was not in effect for this date of loss. No coverage is available."
  },
  {
    "code": "N651",
    "desc": "No Personal Injury Protection/Medical Payments Coverage on the policy at the time of the loss."
  },
  {
    "code": "N652",
    "desc": "The date of service is before the date of loss."
  },
  {
    "code": "N653",
    "desc": "The date of injury does not match the reported date of loss."
  },
  {
    "code": "N654",
    "desc": "Adjusted based on achievement of maximum medical improvement (MMI)."
  },
  {
    "code": "N655",
    "desc": "Payment based on provider's geographic region."
  },
  {
    "code": "N656",
    "desc": "An interest payment is being made because benefits are being paid outside the statutory requirement."
  },
  {
    "code": "N657",
    "desc": "This should be billed with the appropriate code for these services."
  },
  {
    "code": "N658",
    "desc": "The billed service(s) are not considered medical expenses."
  },
  {
    "code": "N659",
    "desc": "This item is exempt from sales tax."
  },
  {
    "code": "N660",
    "desc": "Sales tax has been included in the reimbursement."
  },
  {
    "code": "N661",
    "desc": "Documentation does not support that the services rendered were medically necessary."
  },
  {
    "code": "N662",
    "desc": "Alert: Consideration of payment will be made upon receipt of a final bill."
  },
  {
    "code": "N663",
    "desc": "Adjusted based on an agreed amount."
  },
  {
    "code": "N664",
    "desc": "Adjusted based on a legal settlement."
  },
  {
    "code": "N665",
    "desc": "Services by an unlicensed provider are not reimbursable."
  },
  {
    "code": "N666",
    "desc": "Only one evaluation and management code at this service level is covered during the course of care."
  },
  {
    "code": "N667",
    "desc": "Missing prescription."
  },
  {
    "code": "N668",
    "desc": "Incomplete/invalid prescription."
  },
  {
    "code": "N669",
    "desc": "Adjusted based on the Medicare fee schedule."
  },
  {
    "code": "N670",
    "desc": "This service code has been identified as the primary procedure code subject to the Medicare Multiple Procedure Payment Reduction (MPPR) rule."
  },
  {
    "code": "N671",
    "desc": "Payment based on a jurisdiction cost-charge ratio."
  },
  {
    "code": "N672",
    "desc": "Alert: Amount applied to Health Insurance Offset."
  },
  {
    "code": "N673",
    "desc": "Reimbursement has been calculated based on an outpatient per diem or an outpatient factor and/or fee schedule amount."
  },
  {
    "code": "N674",
    "desc": "Not covered unless a pre-requisite procedure/service has been provided."
  },
  {
    "code": "N675",
    "desc": "Additional information is required from the injured party."
  },
  {
    "code": "N676",
    "desc": "Service does not qualify for payment under the Outpatient Facility Fee Schedule."
  },
  {
    "code": "N677",
    "desc": "Alert: Films/Images will not be returned."
  },
  {
    "code": "N678",
    "desc": "Missing post-operative images/visual field results."
  },
  {
    "code": "N679",
    "desc": "Incomplete/Invalid post-operative images/visual field results."
  },
  {
    "code": "N680",
    "desc": "Missing/Incomplete/Invalid date of previous dental extractions."
  },
  {
    "code": "N681",
    "desc": "Missing/Incomplete/Invalid full arch series."
  },
  {
    "code": "N682",
    "desc": "Missing/Incomplete/Invalid history of prior periodontal therapy/maintenance."
  },
  {
    "code": "N683",
    "desc": "Missing/Incomplete/Invalid prior treatment documentation."
  },
  {
    "code": "N684",
    "desc": "Payment denied as this is a specialty claim submitted as a general claim."
  },
  {
    "code": "N685",
    "desc": "Missing/Incomplete/Invalid Prosthesis, Crown or Inlay Code."
  },
  {
    "code": "N686",
    "desc": "Missing/incomplete/Invalid questionnaire needed to complete payment determination."
  },
  {
    "code": "N687",
    "desc": "Alert: This reversal is due to a retroactive disenrollment."
  },
  {
    "code": "N688",
    "desc": "Alert: This reversal is due to a medical or utilization review decision."
  },
  {
    "code": "N689",
    "desc": "Alert: This reversal is due to a retroactive rate change."
  },
  {
    "code": "N690",
    "desc": "Alert: This reversal is due to a provider submitted appeal."
  },
  {
    "code": "N691",
    "desc": "Alert: This reversal is due to a patient submitted appeal."
  },
  {
    "code": "N692",
    "desc": "Alert: This reversal is due to an incorrect rate on the initial adjudication."
  },
  {
    "code": "N693",
    "desc": "Alert: This reversal is due to a cancellation of the claim by the provider."
  },
  {
    "code": "N694",
    "desc": "Alert: This reversal is due to a resubmission/change to the claim by the provider."
  },
  {
    "code": "N695",
    "desc": "Alert: This reversal is due to incorrect patient financial responsibility information on the initial adjudication."
  },
  {
    "code": "N696",
    "desc": "Alert: This reversal is due to a Coordination of Benefits or Third Party Liability Recovery retroactive adjustment."
  },
  {
    "code": "N697",
    "desc": "Alert: This reversal is due to a payer's retroactive contract incentive program adjustment."
  },
  {
    "code": "N698",
    "desc": "Alert: This reversal is due to non-payment of the health insurance premiums (Health Insurance Exchange or other) by the end of the premium payment grace period, resulting in loss of coverage."
  },
  {
    "code": "N699",
    "desc": "Payment adjusted based on the Physician Quality Reporting System (PQRS) Incentive Program."
  },
  {
    "code": "N700",
    "desc": "Payment adjusted based on the Electronic Health Records (EHR) Incentive Program."
  },
  {
    "code": "N701",
    "desc": "Payment adjusted based on the Value-based Payment Modifier."
  },
  {
    "code": "N702",
    "desc": "Decision based on review of previously adjudicated claims or for claims in process for the same/similar type of services."
  },
  {
    "code": "N703",
    "desc": "This service is incompatible with previously adjudicated claims or claims in process."
  },
  {
    "code": "N704",
    "desc": "Alert: You may not appeal this decision but can resubmit this claim/service with corrected information if warranted."
  },
  {
    "code": "N705",
    "desc": "Incomplete/invalid documentation."
  },
  {
    "code": "N706",
    "desc": "Missing documentation."
  },
  {
    "code": "N707",
    "desc": "Incomplete/invalid orders."
  },
  {
    "code": "N708",
    "desc": "Missing orders."
  },
  {
    "code": "N709",
    "desc": "Incomplete/invalid notes."
  },
  {
    "code": "N710",
    "desc": "Missing notes."
  },
  {
    "code": "N711",
    "desc": "Incomplete/invalid summary."
  },
  {
    "code": "N712",
    "desc": "Missing summary."
  },
  {
    "code": "N713",
    "desc": "Incomplete/invalid report."
  },
  {
    "code": "N714",
    "desc": "Missing report."
  },
  {
    "code": "N715",
    "desc": "Incomplete/invalid chart."
  },
  {
    "code": "N716",
    "desc": "Missing chart."
  },
  {
    "code": "N717",
    "desc": "Incomplete/Invalid documentation of face-to-face examination."
  },
  {
    "code": "N718",
    "desc": "Missing documentation of face-to-face examination."
  },
  {
    "code": "N719",
    "desc": "Penalty applied based on plan requirements not being met."
  },
  {
    "code": "N720",
    "desc": "Alert: The patient overpaid you. You may need to issue the patient a refund for the difference between the patient's payment and the amount shown as patient responsibility on this notice."
  },
  {
    "code": "N721",
    "desc": "This service is only covered when performed as part of a clinical trial."
  },
  {
    "code": "N722",
    "desc": "Patient must use Workers' Compensation Set-Aside (WCSA) funds to pay for the medical service or item."
  },
  {
    "code": "N723",
    "desc": "Patient must use Liability set-aside (LSA) funds to pay for the medical service or item."
  },
  {
    "code": "N724",
    "desc": "Patient must use No-Fault set-aside (NFSA) funds to pay for the medical service or item."
  },
  {
    "code": "N725",
    "desc": "A liability insurer has reported having ongoing responsibility for medical services (ORM) for this diagnosis."
  },
  {
    "code": "N726",
    "desc": "A conditional payment is not allowed."
  },
  {
    "code": "N727",
    "desc": "A no-fault insurer has reported having ongoing responsibility for medical services (ORM) for this diagnosis."
  },
  {
    "code": "N728",
    "desc": "A workers' compensation insurer has reported having ongoing responsibility for medical services (ORM) for this diagnosis."
  },
  {
    "code": "N729",
    "desc": "Missing patient medical/dental record for this service."
  },
  {
    "code": "N730",
    "desc": "Incomplete/invalid patient medical/dental record for this service."
  },
  {
    "code": "N731",
    "desc": "Incomplete/Invalid mental health assessment."
  },
  {
    "code": "N732",
    "desc": "Services performed at an unlicensed facility are not reimbursable."
  },
  {
    "code": "N733",
    "desc": "Regulatory surcharges are paid directly to the state."
  },
  {
    "code": "N734",
    "desc": "The patient is eligible for these medical services only when unable to work or perform normal activities due to an illness or injury."
  },
  {
    "code": "N736",
    "desc": "Incomplete/invalid Sleep Study Report."
  },
  {
    "code": "N737",
    "desc": "Missing Sleep Study Report."
  },
  {
    "code": "N738",
    "desc": "Incomplete/invalid Vein Study Report."
  },
  {
    "code": "N739",
    "desc": "Missing Vein Study Report."
  },
  {
    "code": "N740",
    "desc": "The member's Consumer Spending Account does not contain sufficient funds to cover the member's liability for this claim/service."
  },
  {
    "code": "N741",
    "desc": "This is a site neutral payment."
  },
  {
    "code": "N743",
    "desc": "Adjusted because the services may be related to an employment accident."
  },
  {
    "code": "N744",
    "desc": "Adjusted because the services may be related to an auto/other accident."
  },
  {
    "code": "N745",
    "desc": "Missing Ambulance Report."
  },
  {
    "code": "N746",
    "desc": "Incomplete/invalid Ambulance Report."
  },
  {
    "code": "N747",
    "desc": "This is a misdirected claim/service. Submit the claim to the payer/plan where the patient resides."
  },
  {
    "code": "N748",
    "desc": "Adjusted because the related hospital charges have not been received."
  },
  {
    "code": "N749",
    "desc": "Missing Blood Gas Report."
  },
  {
    "code": "N750",
    "desc": "Incomplete/invalid Blood Gas Report."
  },
  {
    "code": "N751",
    "desc": "Adjusted because the patient is covered under a Medicare Part D plan."
  },
  {
    "code": "N752",
    "desc": "Missing/incomplete/invalid HIPPS Treatment Authorization Code (TAC)."
  },
  {
    "code": "N753",
    "desc": "Missing/incomplete/invalid Attachment Control Number."
  },
  {
    "code": "N754",
    "desc": "Missing/incomplete/invalid Referring Provider or Other Source Qualifier on the 1500 Claim Form."
  },
  {
    "code": "N755",
    "desc": "Missing/incomplete/invalid ICD Indicator."
  },
  {
    "code": "N756",
    "desc": "Missing/incomplete/invalid point of drop-off address."
  },
  {
    "code": "N757",
    "desc": "Adjusted based on the Federal Indian Fees schedule (MLR)."
  },
  {
    "code": "N758",
    "desc": "Adjusted based on the prior authorization decision."
  },
  {
    "code": "N759",
    "desc": "Payment adjusted based on the National Electrical Manufacturers Association (NEMA) Standard XR-29-2013."
  },
  {
    "code": "N760",
    "desc": "This facility is not authorized to receive payment for the service(s)."
  },
  {
    "code": "N761",
    "desc": "This provider is not authorized to receive payment for the service(s)."
  },
  {
    "code": "N762",
    "desc": "This facility is not certified for Tomosynthesis (3-D) mammography."
  },
  {
    "code": "N763",
    "desc": "The demonstration code is not appropriate for this claim; resubmit without a demonstration code."
  },
  {
    "code": "N764",
    "desc": "Missing/incomplete/invalid Hematocrit (HCT) value."
  },
  {
    "code": "N765",
    "desc": "This payer does not cover coinsurance assessed by a previous payer."
  },
  {
    "code": "N766",
    "desc": "This payer does not cover co-payment assessed by a previous payer."
  },
  {
    "code": "N767",
    "desc": "The Medicaid state requires provider to be enrolled in the member's Medicaid state program prior to any claim benefits being processed."
  },
  {
    "code": "N768",
    "desc": "Incomplete/invalid initial evaluation report."
  },
  {
    "code": "N769",
    "desc": "A lateral diagnosis is required."
  },
  {
    "code": "N770",
    "desc": "The adjustment request received from the provider has been processed. Your original claim has been adjusted based on the information received."
  },
  {
    "code": "N771",
    "desc": "Alert: Under Federal law you cannot charge more than the limiting charge amount."
  },
  {
    "code": "N772",
    "desc": "Alert: Rebill urgent/emergent and ancillary services separately."
  },
  {
    "code": "N773",
    "desc": "Drug supplied not obtained from specialty vendor."
  },
  {
    "code": "N774",
    "desc": "Alert: Refer to your Third Party Processor Agreement for specific information on fees associated with this payment type."
  },
  {
    "code": "N775",
    "desc": "Payment adjusted based on x-ray radiograph on film."
  },
  {
    "code": "N776",
    "desc": "This service is not a covered Telehealth service."
  },
  {
    "code": "N777",
    "desc": "Missing Assignment of Benefits Indicator."
  },
  {
    "code": "N778",
    "desc": "Missing Primary Care Physician Information."
  },
  {
    "code": "N779",
    "desc": "Replacement/Void claims cannot be submitted until the original claim has finalized. Please resubmit once payment or denial is received."
  },
  {
    "code": "N780",
    "desc": "Missing/incomplete/invalid end therapy date."
  },
  {
    "code": "N781",
    "desc": "Alert: Patient is a Medicaid/ Qualified Medicare Beneficiary. Review your records for any wrongfully collected deductible. This amount may be billed to a subsequent payer."
  },
  {
    "code": "N782",
    "desc": "Alert: Patient is a Medicaid/ Qualified Medicare Beneficiary. Review your records for any wrongfully collected coinsurance. This amount may be billed to a subsequent payer."
  },
  {
    "code": "N783",
    "desc": "Alert: Patient is a Medicaid/ Qualified Medicare Beneficiary. Review your records for any wrongfully collected copayment. This amount may be billed to a subsequent payer."
  },
  {
    "code": "N784",
    "desc": "Missing comprehensive procedure code."
  },
  {
    "code": "N785",
    "desc": "Missing current radiology film/images."
  },
  {
    "code": "N786",
    "desc": "Benefit limitation for the orthodontic active and/or retention phase of treatment."
  },
  {
    "code": "N787",
    "desc": "Alert: Under 42 CFR 410.43, an eligible Partial Hospitalization Program (PHP) patient/beneficiary requires a minimum of 20 hours of PHP services per week, as evidenced in the plan of care. PHP serv..."
  },
  {
    "code": "N788",
    "desc": "Alert: The third-party administrator/review organization did not receive the required information."
  },
  {
    "code": "N789",
    "desc": "Clinical Trial is not a covered benefit."
  },
  {
    "code": "N790",
    "desc": "Provider/supplier not accredited for product/service."
  },
  {
    "code": "N791",
    "desc": "Missing history & physical report."
  },
  {
    "code": "N792",
    "desc": "Incomplete/invalid history & physical report."
  },
  {
    "code": "N794",
    "desc": "Payment adjusted based on type of technology used."
  },
  {
    "code": "N795",
    "desc": "Item must be resubmitted as a purchase."
  },
  {
    "code": "N796",
    "desc": "Missing/incomplete/invalid Hemoglobin (Hb or Hgb) value."
  },
  {
    "code": "N797",
    "desc": "Missing/incomplete/invalid date qualifier."
  },
  {
    "code": "N798",
    "desc": "Submit a void request for the original claim and resubmit a new claim."
  },
  {
    "code": "N799",
    "desc": "Submitted identifier must be an individual identifier, not group identifier."
  },
  {
    "code": "N800",
    "desc": "Only one service date is allowed per claim."
  },
  {
    "code": "N801",
    "desc": "Services performed in a Medicare participating or CAH facility under a self-insured tribal Group Health Plan, in accordance with Federal Regulation 42 CFR 136."
  },
  {
    "code": "N802",
    "desc": "This claim/service is not payable under our service area. The claim must be filed to the Payer/Plan in whose service area the Rendering Physician is located."
  },
  {
    "code": "N803",
    "desc": "Submission of the claim for the service rendered is the responsibility of the Contracted Medical Group or Hospital."
  },
  {
    "code": "N804",
    "desc": "Alert: The claim/service was processed through the Outpatient Code Editor (OCE)."
  },
  {
    "code": "N805",
    "desc": "Alert: The claim/service was processed through the Correct Code Editor (CCE)."
  },
  {
    "code": "N806",
    "desc": "Payment is included in the Global transplant allowance."
  },
  {
    "code": "N807",
    "desc": "Payment adjustment based on the Merit-based Incentive Payment System (MIPS)."
  },
  {
    "code": "N808",
    "desc": "Not covered for this provider type / provider specialty."
  },
  {
    "code": "N809",
    "desc": "Alert: The fee schedule amount for this service was adjusted based on prior competitive bidding rates. For more information, contact your local contractor."
  },
  {
    "code": "N810",
    "desc": "Alert: Due to federal, state or local disaster declaration, this claim has been processed at the in-network level of benefit. At the conclusion or expiration of the disaster declaration, network pa..."
  },
  {
    "code": "N811",
    "desc": "Missing Federal Sequestration Reduction from Prior Payer."
  },
  {
    "code": "N812",
    "desc": "The start service date through end service date cannot span greater than 18 months."
  },
  {
    "code": "N815",
    "desc": "Missing/Incomplete/Invalid NDC Unit Count"
  },
  {
    "code": "N816",
    "desc": "Missing/Incomplete/Invalid NDC Unit of Measure"
  },
  {
    "code": "N817",
    "desc": "Alert: Applicable laboratories are required to collect and report private payor data and report that data to CMS between January 1, 2020 - March 31, 2020."
  },
  {
    "code": "N818",
    "desc": "Claims Dates of Service do not match Electronic Visit Verification System."
  },
  {
    "code": "N819",
    "desc": "Patient not enrolled in Electronic Visit Verification System."
  },
  {
    "code": "N820",
    "desc": "Electronic Visit Verification System units do not meet requirements of visit."
  },
  {
    "code": "N821",
    "desc": "Electronic Visit Verification System visit not found."
  },
  {
    "code": "N822",
    "desc": "Missing procedure modifier(s)."
  },
  {
    "code": "N823",
    "desc": "Incomplete/Invalid procedure modifier(s)."
  },
  {
    "code": "N824",
    "desc": "Electronic Visit Verification (EVV) data must be submitted through EVV Vendor."
  },
  {
    "code": "N825",
    "desc": "Early intervention guidelines were not met."
  },
  {
    "code": "N826",
    "desc": "Patient did not meet the inclusion criteria for the Medicare Shared Savings Program."
  },
  {
    "code": "N827",
    "desc": "Missing/Incomplete/Invalid Federal Information Processing Standard (FIPS) Code."
  },
  {
    "code": "N828",
    "desc": "Alert: Payment is suppressed due to a contracted funding."
  },
  {
    "code": "N829",
    "desc": "Missing/incomplete/invalid Diagnostics Exchange Z-Code Identifier."
  },
  {
    "code": "N830",
    "desc": "Alert: The charge[s] for this service was processed in accordance with Federal/ State, Balance Billing/ No Surprise Billing regulations. As such, any amount identified with OA, CO, or PI cannot be ..."
  },
  {
    "code": "N831",
    "desc": "You have not responded to requests to revalidate your provider/supplier enrollment information."
  },
  {
    "code": "N832",
    "desc": "Duplicate occurrence code/occurrence span code."
  },
  {
    "code": "N833",
    "desc": "Patient share of cost waived."
  },
  {
    "code": "N834",
    "desc": "Jurisdiction exempt from sales and health tax charges."
  },
  {
    "code": "N835",
    "desc": "Unrelated Service/procedure/treatment is reduced. The balance of this charge is the patient's responsibility."
  },
  {
    "code": "N836",
    "desc": "Provider W9 or Payee Registration not on file."
  },
  {
    "code": "N837",
    "desc": "Alert: Missing modifier was added."
  },
  {
    "code": "N838",
    "desc": "Alert: Service/procedure postponed due to a federal, state, or local mandate/disaster declaration. Any amounts applied to deductible or member liability will be applied to the prior plan year from ..."
  },
  {
    "code": "N839",
    "desc": "The procedure code was added/changed because the level of service exceeds the compensable condition(s)."
  },
  {
    "code": "N840",
    "desc": "Worker's compensation claim filed with a different state."
  },
  {
    "code": "N841",
    "desc": "Alert: North Dakota Administrative Rule 92-01-02-50.3."
  },
  {
    "code": "N842",
    "desc": "Alert: Patient cannot be billed for charges."
  },
  {
    "code": "N843",
    "desc": "Missing/incomplete/invalid Core-Based Statistical Area (CBSA) code."
  },
  {
    "code": "N844",
    "desc": "This claim, or a portion of this claim, was processed in accordance with the Nebraska Legislative LB997 July 24, 2020 - Out of Network Emergency Medical Care Act."
  },
  {
    "code": "N845",
    "desc": "Alert: Nebraska Legislative LB997 July 24, 2020 - Out of Network Emergency Medical Care Act."
  },
  {
    "code": "N846",
    "desc": "National Drug Code (NDC) supplied does not correspond to the HCPCs/CPT billed."
  },
  {
    "code": "N847",
    "desc": "National Drug Code (NDC) billed is obsolete."
  },
  {
    "code": "N848",
    "desc": "National Drug Code (NDC) billed cannot be associated with a product."
  },
  {
    "code": "N849",
    "desc": "Missing Tooth Clause: Tooth missing prior to the member effective date."
  },
  {
    "code": "N850",
    "desc": "Missing/incomplete/invalid narrative explaining/describing this service/treatment."
  },
  {
    "code": "N851",
    "desc": "Payment reduced because services were furnished by a therapy assistant."
  },
  {
    "code": "N852",
    "desc": "The pay-to and rendering provider tax identification numbers (TINs) do not match"
  },
  {
    "code": "N853",
    "desc": "The number of modalities performed per session exceeds our acceptable maximum."
  },
  {
    "code": "N854",
    "desc": "Alert: If you have primary other health insurance (OHI) coverage that has denied services, you must exhaust all appeal levels with your primary OHI before we can consider your claim for reimbursement."
  },
  {
    "code": "N855",
    "desc": "This coverage is subject to the exclusive jurisdiction of ERISA (1974), U.S.C. SEC 1001."
  },
  {
    "code": "N856",
    "desc": "This coverage is not subject to the exclusive jurisdiction of ERISA (1974), U.S.C. SEC 1001."
  },
  {
    "code": "N857",
    "desc": "This claim has been adjusted/reversed. Refund any collected copayment to the member."
  },
  {
    "code": "N858",
    "desc": "Alert: State regulations relating to an Out of Network Medical Emergency Care Act were applied to the processing of this claim. Payment amounts are eligible for dispute following the state's docume..."
  },
  {
    "code": "N859",
    "desc": "Alert: The Federal No Surprise Billing Act was applied to the processing of this claim. Payment amounts are eligible for dispute pursuant to any Federal documented appeal/ grievance/ dispute resolu..."
  },
  {
    "code": "N860",
    "desc": "Alert: The Federal No Surprise Billing Act Qualified Payment Amount (QPA) was used to calculate the member cost share(s)."
  },
  {
    "code": "N861",
    "desc": "Alert: Mismatch between the submitted Patient Liability/Share of Cost and the amount on record for this recipient."
  },
  {
    "code": "N862",
    "desc": "Alert: Member cost share is in compliance with the No Surprises Act, and is calculated using the lesser of the QPA or billed charge."
  },
  {
    "code": "N863",
    "desc": "Alert: This claim is subject to the No Surprises Act (NSA). The amount paid is the final out-of-network rate and was calculated based on an All Payer Model Agreement, in accordance with the NSA."
  },
  {
    "code": "N864",
    "desc": "Alert: This claim is subject to the No Surprises Act provisions that apply to emergency services."
  },
  {
    "code": "N865",
    "desc": "Alert: This claim is subject to the No Surprises Act provisions that apply to nonemergency services furnished by nonparticipating providers during a patient visit to a participating facility."
  },
  {
    "code": "N866",
    "desc": "Alert: This claim is subject to the No Surprises Act provisions that apply to services furnished by nonparticipating providers of air ambulance services."
  },
  {
    "code": "N867",
    "desc": "Alert: Cost sharing was calculated based on a specified state law, in accordance with the No Surprises Act."
  },
  {
    "code": "N868",
    "desc": "Alert: Cost sharing was calculated based on an All-Payer Model Agreement, in accordance with the No Surprises Act."
  },
  {
    "code": "N869",
    "desc": "Alert: Cost sharing was calculated based on the qualifying payment amount, in accordance with the No Surprises Act."
  },
  {
    "code": "N870",
    "desc": "Alert: In accordance with the No Surprises Act, cost sharing was based on the billed amount because the billed amount was lower than the qualifying payment amount."
  },
  {
    "code": "N871",
    "desc": "Alert: This initial payment was calculated based on a specified state law, in accordance with the No Surprises Act."
  },
  {
    "code": "N872",
    "desc": "Alert: This final payment was calculated based on a specified state law, in accordance with the No Surprises Act."
  },
  {
    "code": "N873",
    "desc": "Alert: This final payment was calculated based on an All-Payer Model Agreement, in accordance with the No Surprises Act."
  },
  {
    "code": "N874",
    "desc": "Alert: This final payment was determined through open negotiation, in accordance with the No Surprises Act."
  },
  {
    "code": "N875",
    "desc": "Alert: This final payment equals the amount selected as the out-of-network rate by a Federal Independent Dispute Resolution Entity, in accordance with the No Surprises Act."
  },
  {
    "code": "N876",
    "desc": "Alert: This item or service is covered under the plan. This is a notice of denial of payment provided in accordance with the No Surprises Act. The provider or facility may initiate open negotiation..."
  },
  {
    "code": "N877",
    "desc": "Alert: This initial payment is provided in accordance with the No Surprises Act. The provider or facility may initiate open negotiation if they desire to negotiate a higher out-of-network rate."
  },
  {
    "code": "N878",
    "desc": "Alert: The provider or facility specified that notice was provided and consent to balance bill obtained, but notice and consent was not provided and obtained in a manner consistent with applicable ..."
  },
  {
    "code": "N879",
    "desc": "Alert: The notice and consent to balance bill, and to be charged out-of-network cost sharing, that was obtained from the patient with regard to the billed services, is not permitted for these servi..."
  },
  {
    "code": "N880",
    "desc": "Original claim closed due to changes in submitted data. Adjustment claim will be processed under a new claim number."
  },
  {
    "code": "N881",
    "desc": "Client Obligation, patient responsibility for Home & Community Based Services (HCBS)"
  },
  {
    "code": "N882",
    "desc": "Alert: The out-of-network payment and cost sharing amounts were based on the plan's allowance because the provider or facility obtained the patient's consent to waive the balance billing protection..."
  },
  {
    "code": "N883",
    "desc": "Alert: Processed according to state law"
  },
  {
    "code": "N884",
    "desc": "Alert: The No Surprises Act may apply to this claim. Please contact payer for instructions on how to submit information regarding whether or not the item or service was furnished during a patient v..."
  },
  {
    "code": "N885",
    "desc": "Alert: This claim was not processed in accordance with the No Surprises Act cost-sharing or out-of-network payment requirements. The payer disagrees with your determination that those requirements ..."
  },
  {
    "code": "N886",
    "desc": "Alert: A Health Care Claim Request for Additional Information (277 RFAI) has been sent."
  },
  {
    "code": "N887",
    "desc": "Providers not participating in the Medicare Advantage Plan have the right to appeal if the plan has partially or fully denied payment or if the provider believes the plan has not paid the services ..."
  },
  {
    "code": "N888",
    "desc": "Alert: An electronic request for additional information has been sent for this claim."
  },
  {
    "code": "N889",
    "desc": "Alert: This claim was originally processed in real-time, and we sent a real-time 835 response."
  },
  {
    "code": "N890",
    "desc": "Electronic Visit Verification Data Element Requirements were not met."
  },
  {
    "code": "N891",
    "desc": "The maximum allowable payment for this service/procedure was paid by the primary insurance. No further payment due."
  },
  {
    "code": "N892",
    "desc": "The claim does not meet the criteria for acceptable use of the Delay Reason Code."
  },
  {
    "code": "N893",
    "desc": "Missing/incomplete/invalid child medical evaluation form/checklist."
  },
  {
    "code": "N894",
    "desc": "Alert: These payments are made subject to a reservation of rights for the Payor to recoup or otherwise recover all or part of these payments based on any of the following: outcome of pending or fut..."
  },
  {
    "code": "N895",
    "desc": "Processed based on a negotiated fee schedule for a specialty drug program."
  },
  {
    "code": "N896",
    "desc": "Missing/incomplete/invalid trauma activation sheet."
  },
  {
    "code": "N897",
    "desc": "Missing/incomplete/invalid proof of member payment."
  },
  {
    "code": "N898",
    "desc": "Missing/incomplete/invalid Resource Utilization Group(s) (RUG) code(s)."
  },
  {
    "code": "N899",
    "desc": "Missing Initial Evaluation Report."
  },
  {
    "code": "N900",
    "desc": "Missing Therapy Notes/Report."
  },
  {
    "code": "N901",
    "desc": "Incomplete/Invalid Therapy Notes/Report."
  },
  {
    "code": "N902",
    "desc": "Missing Health Risk Assessment (HRA)."
  },
  {
    "code": "N903",
    "desc": "Incomplete/Invalid Health Risk Assessment (HRA)."
  },
  {
    "code": "N904",
    "desc": "The transportation vendor is responsible for this claim."
  },
  {
    "code": "N905",
    "desc": "Our records show you have opted out of Medicare, agreeing with the patient not to bill Medicare for services/tests/supplies furnished. As result, we cannot pay this claim. The patient is not respon..."
  },
  {
    "code": "N906",
    "desc": "Service is not covered when patient is under age 45."
  },
  {
    "code": "N907",
    "desc": "No refund because this claim has been identified as 340B-eligible with a ceiling price lower than the maximum fair price."
  },
  {
    "code": "N908",
    "desc": "No refund because this drug has been prospectively purchased at the maximum fair price."
  },
  {
    "code": "N909",
    "desc": "Refund amount has been calculated using a methodology that differs from the Standard Default Refund Amount calculation ((Wholesale Acquisition Cost minus Maximum Fair Price) times Quantity)."
  },
  {
    "code": "N910",
    "desc": "A refund cannot be provided for this claim at this time. Contact the manufacturer directly regarding your eligibility."
  },
  {
    "code": "N911",
    "desc": "This claim cannot be reimbursed by the manufacturer until the Part D plan submits corrected prescription drug event data to CMS for maximum fair price validation."
  },
  {
    "code": "N912",
    "desc": "Our records indicate that this beneficiary did not elect hospice."
  },
  {
    "code": "N913",
    "desc": "More than one Electronic Visit Verification record exists for the date and time of this service."
  },
  {
    "code": "N914",
    "desc": "This claim was priced and processed in accordance with California AB-72 Health care coverage."
  },
  {
    "code": "N915",
    "desc": "Predetermination of services is not allowed under the member's plan."
  },
  {
    "code": "N916",
    "desc": "The third party will render payment to the provider, and they will reimburse you for covered services."
  }
];
