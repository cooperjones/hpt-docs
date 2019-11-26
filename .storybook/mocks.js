global.storybookMocks = {
    confirmEnrollment: {
      heading: "Promissory Note",
      isRequired: true,
      message: "Message to display",
      requiresAgreement: true
    },
    confirmEnrollmentNotRequired: {
      heading: "Additional Message",
      isRequired: true,
      message: "This message does not require an agreement.",
      requiresAgreement: false
    },
    classDetails: {
      show_validate: "N",
      show_waitlist: "Y",
      section_info: {
        class_details: {
          institution: "PSUNV",
          subject: "ANTHRO",
          catalog_nbr: "101",
          status: "Open",
          class_number: 1802,
          component: "LEC",
          course_offer_nbr: 1,
          session: "Regular Academic Session",
          session_code: "1",
          class_section: "1",
          section_descr: "ANTHRO 101 - 1",
          units: "3 units",
          acad_career: "UGRD",
          acad_career_descr: "Undergraduate",
          course_id: "001234",
          course_title: "Introduction to Anthropology",
          course_status: "A",
          instruction_mode: "In Person",
          grading_basis: "Graded",
          campus: "Main Hacienda Campus",
          campus_code: "MAIN",
          location: "Hacienda",
          topic: "",
          class_components:
            '<table class="PSTEXT"><tr><td>Lecture Required</td></tr></table>'
        },
        meetings: [
          {
            meets: "MoWeFr 10:00am - 10:50am",
            stnd_mtg_pat: "MoWeFr",
            meeting_time_start: "10:00am",
            meeting_time_end: "10:50am",
            bldg_cd: "",
            bldg_has_coordinates: false,
            room: "TBA",
            instructor: "Staff",
            instructors: [{name: "Staff", email: ""}],
            start_date: "01/24/2019",
            end_date: "05/08/2019",
            topic: "TBA",
            show_topic: false,
            date_range: "01/24/2019 - 05/08/2019"
          }
        ],
        enrollment_information: {
          add_consent: "",
          drop_consent: "",
          enroll_requirements: "",
          requirement_desig: "",
          class_attributes: "Test \r test"
        },
        class_availability: {
          class_capacity: "30",
          enrollment_total: "0",
          enrollment_available: 30,
          wait_list_capacity: "10",
          wait_list_total: "0"
        },
        is_combined: false,
        notes: { class_notes: "", subject_notes: "" },
        catalog_descr: {
          crse_catalog_description: "",
          Language_Data: "ENG",
          Language_Base: "ENG",
          strInstitution: "PSUNV",
          strAcadCareer: "UGRD",
          strTerm: "0820",
          sCrseID: "001234"
        },
        materials: {
          txb_none: "N",
          txb_status: "P",
          txb_special_instructions: "",
          textbooks_message: "Textbooks to be determined"
        },
        valid_to_enroll: "T",
        planner_careers: [
          { acad_career: "UGRD", descr: "Undergraduate", in_planner: false }
        ],
        cart_careers: [{ acad_career: "UGRD", descr: "Undergraduate" }],
        cart_career: ""
      },
      class_enroll_info: {
        last_enrl_dt_passed: false,
        is_related: false,
        is_in_cart: false,
        acad_career: "",
        can_enroll_inst_term: true,
        is_enrolled: false,
        is_waitlisted: false,
        careers: [
          { acad_career: "UGRD", descr: "Undergraduate", in_planner: false }
        ],
        can_add_to_planner: true,
        enrl_terms: [
          {
            institution: "PSUNV",
            acad_career: "UGRD",
            acad_career_descr: "Undergraduate",
            strm: "0820",
            term_descr: "2019 Spring",
            begin_dt: "2019-01-24",
            end_dt: "2019-05-08",
            withdrawn: "N"
          }
        ]
      },
      show_add_to_cart: "Y",
      show_add_to_cart_msg:
        "This class is already in your Shopping Cart. Try another.",
      has_enrollment_options: true,
      grades: { official: "", input: "" },
      drop_withdraw_dates: [],
      has_friends: false,
      add_to_planner_url: "/app/student/enrollmentplanner/add/PSUNV/%s/001234/1",
      add_to_cart_url:
        "/app/student/enrollmentcart/selectRelated/PSUNV/%s/0820/1802",
      confirmEnrollment: {
        isRequired: true,
        requiresAgreement: true,
        heading: "Agreement",
        message:
          'Once I register for a course, I become responsible for payment of the resulting tuition, fees and other associated financial obligations. By proceeding with my registration, in exchange for being permitted to register for and attend classes, I am entering into a Promissory Note ("Agreement") with the University obligating me to pay all outstanding monies owed to the University not paid by loans, scholarships, grants and/or other payments. Payments are due by the due date displayed in each Electronic Bill posted for me in PeoplePAY.\n\nShould I fail to pay any outstanding balances in full when due, I agree that a monthly $50 late fee will be assessed to my balance. I further agree that should my account become delinquent, the University will assess a collection fee of $100 and may withhold future registration or schedule adjustments, the awarding of any degree(s) or diplomas, and/or grades and official transcripts. Further, if I am delinquent, the University may pursue litigation against me, transfer my account to a collection agency and/or report any delinquency to credit bureau(s). In addition to my balance, I agree to pay the University\'s costs and fees, including attorneys\' fees and costs of collection agencies (which may be based on a percentage of the debt), incurred in any litigation or collection activity resulting from my failure to pay under this Agreement.\n\nI authorize PeopleSoft University and its agents, representatives, attorneys and contractors (including collection agencies) to contact me through my mobile phone, home phone and email, including by way of text and automated message calls, for purposes of collecting any portion of my student financial obligation which is past due.\n\nMy withdrawal effective date, if any, will determine the amount of credit that I may be eligible to receive pursuant to University policy <a href="http://studentaid.ed.gov" target="_blank">09-05-08 Termination of Registration</a>, and the Resignation and Title IV Refund Policy links found at www.payments.psunv.edu.\n\nI have read this Agreement and understand it. By clicking the ENROLL button, I affix my electronic signature, consent to this Agreement and agree to pay the University my outstanding balance, plus fees and costs as set forth above.'
      },
      add_to_schedule_builder_url:
        "https://cs92-devo-ps.mhighpoint.com/psc/csdev92o/EMPLOYEE/SA/s/WEBLIB_H_SB_STD.ISCRIPT1.FieldFormula.IScript_AddCourse?institution=PSUNV&term=0820&crseId=001234&crseOfferNbr=1",
      bookstore: {
        request_type: "G",
        button_label: "Buy Books",
        bookstore_url: "http://www.example.com",
        params: [
          { param: "course_id", value: "001234" },
          { param: "term", value: "0820" },
          { param: "class_number", value: "1802" },
          {
            param: "developer_key",
            value: "FEGlRc4ea3120fc2e342f399aa1d50dd8c9da277935520GP4W"
          }
        ]
      },
      cfg: {
        is_related: false,
        show_crse_id: false,
        show_crse_offer_nbr: true,
        show_campus: true,
        show_location: true,
        show_consent_to_add: true,
        show_consent_to_drop: true,
        show_enroll_req: true,
        show_req_desig: true,
        show_class_attributes: true,
        show_class_availability: true,
        show_combined: true,
        show_class_notes: true,
        show_catalog_descr: false,
        show_textbook_info: true,
        show_common_attributes: true,
        can_add_to_planner: true,
        show_enroll: true,
        can_add_to_cart: true,
        can_enroll_class: true,
        can_validate_class: false,
        can_edit_class: false,
        can_delete_class: false,
        show_friend_suggest: false,
        show_bookstore: true,
        show_share: true,
        share_email: true,
        share_facebook: true,
        share_twitter: true,
        share_google: false,
        share_tumblr: true,
        show_wait_list: true,
        show_instruction_mode: true,
        show_topic: false,
        show_add_to_wish_list: false,
        wish_list_enabled: true,
        wish_list_label: "Wish List",
        show_actions: true
      }
    },
    enrollmentResults: [
      {
        classNbr: 1460,
        status: "E",
        result: {
          classNbr: 1460,
          status: "E",
          statusDescr: "Errors Found",
          messages: [
            {
              text:
                "Unable to add this class - term maximum exceeded. Adding this class would exceed the maximum number of units or courses allowed for this term.",
              status: "E",
              statusDescr: "Errors found"
            },
            {
              text:
                "You've already taken this class.",
              status: "E",
              statusDescr: "Errors found"
            }
          ]
        },
        acadProgram: "",
        catalogNbr: "177",
        courseCount: 1,
        crseId: "003544",
        crseOfferNbr: 1,
        descr: "American Art",
        enrollmentOptions: {},
        gradingBasis: "GRD",
        instructor: "",
        isInCart: true,
        optionsExist: false,
        permissionNumber: 0,
        relatedClasses: [],
        requirementDesignation: "",
        requirementDesignationOption: false,
        section: "1",
        startDate: null,
        subject: "ARTHIST",
        units: 3,
        waitlist: false
      }
    ],
    messages: [
      {
        explainText: "The PeopleCode program executed a Warning statement, which has produced this message.",
        msgNbr: 10,
        msgSet: 202,
        status: "E",
        text: "This is a PeopleCode warning."
      }
    ],
    enrollmentOptionsResponse: {
      cart_data: {
        emplid: "",
        acad_career: "",
        institution: "",
        strm: "",
        class_nbr: 0,
        relate_class_nbr_1: 0,
        relate_class_nbr_2: 0,
        unt_taken: 0,
        crse_count: 0,
        grading_basis_enrl: "",
        class_prmsn_nbr: 0,
        instructor_id: "",
        rqmnt_designtn: "",
        rqmnt_designtn_opt: "",
        start_dt: "",
        wait_list_okay: false,
        acad_prog: "",
        enrl_req_detl_stat: "",
        userid: "",
        dttm_stamp_sec: "",
        ssr_validate: false,
        ssr_validatn_dttm: "",
        quantity: 0,
        scc_row_add_oprid: "",
        scc_row_add_dttm: "",
        scc_row_upd_oprid: "",
        scc_row_upd_dttm: ""
      },
      options: {
        AcadPrograms: [
          { AcadProg: "FAU", Descr: "Fine Arts Undergraduate", IsDefault: false },
          {
            AcadProg: "LAU",
            Descr: "Liberal Arts Undergraduate",
            IsDefault: false
          }
        ],
        Instructors: [],
        StartDate: "2019-02-04",
        LastEnrollDate: null,
        RequirementDesignationDescr: "",
        EnabledOptions: {
          AcadProgram: true,
          GradingBasis: false,
          Instructor: false,
          PermissionNumber: true,
          RequirementDesignation: false,
          StartDate: true,
          Units: false,
          Waitlist: true
        },
        GradingBasis: {
          Default: "",
          Descr: "Graded",
          GradingBases: [{ Code: "GRD", Descr: "Graded", IsDefault: true }],
          ErrorMessage: ""
        },
        Units: { Increment: 0.5, Max: 3, Min: 3 },
        DropClassIfEnrl: [{ClassNumber: 1394, Descr: "ARTHIST 177: American Art", IsDefault: false}]
      },
      confirmEnrollment: {
        isRequired: true,
        requiresAgreement: true,
        heading: "Agreement",
        message:
          'Once I register for a course, I become responsible for payment of the resulting tuition, fees and other associated financial obligations. By proceeding with my registration, in exchange for being permitted to register for and attend classes, I am entering into a Promissory Note ("Agreement") with the University obligating me to pay all outstanding monies owed to the University not paid by loans, scholarships, grants and/or other payments. Payments are due by the due date displayed in each Electronic Bill posted for me in PeoplePAY.\n\nShould I fail to pay any outstanding balances in full when due, I agree that a monthly $50 late fee will be assessed to my balance. I further agree that should my account become delinquent, the University will assess a collection fee of $100 and may withhold future registration or schedule adjustments, the awarding of any degree(s) or diplomas, and/or grades and official transcripts. Further, if I am delinquent, the University may pursue litigation against me, transfer my account to a collection agency and/or report any delinquency to credit bureau(s). In addition to my balance, I agree to pay the University\'s costs and fees, including attorneys\' fees and costs of collection agencies (which may be based on a percentage of the debt), incurred in any litigation or collection activity resulting from my failure to pay under this Agreement.\n\nI authorize PeopleSoft University and its agents, representatives, attorneys and contractors (including collection agencies) to contact me through my mobile phone, home phone and email, including by way of text and automated message calls, for purposes of collecting any portion of my student financial obligation which is past due.\n\nMy withdrawal effective date, if any, will determine the amount of credit that I may be eligible to receive pursuant to University policy <a href="http://studentaid.ed.gov" target="_blank">09-05-08 Termination of Registration</a>, and the Resignation and Title IV Refund Policy links found at www.payments.psunv.edu.\n\nI have read this Agreement and understand it. By clicking the ENROLL button, I affix my electronic signature, consent to this Agreement and agree to pay the University my outstanding balance, plus fees and costs as set forth above.'
      }
    },
    classInfo: {
      Subject: "TEST",
      CatalogNbr: "123",
      Descr: "more test",
      Section: "1",
      ClassNbr: 321
    }
  };
  