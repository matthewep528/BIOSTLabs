////////////////////////////////////////////////////
// DESIGNPLUS CONFIG                            //
////////////////////////////////////////////////////
// Legacy
var DT_variables = {
        // Paste variables from existing code here
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '201769',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: true,
    	 // OPTIONAL: Limit by course format
	     limitByFormat: false, // Change to true to limit by format
	     // adjust the formats as needed. Format must be set for the course and in this array for tools to load
	     formatArray: [
            'online',
            'on-campus',
            'blended'
        ],
        // OPTIONAL: Limit tools loading by users role
        limitByRole: false, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'student',
            'teacher',
            'admin'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: true, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            '74488', //Stephen Butler online3
            '12552', //Stephen Butler smb285@pitt.edu
            '74493', //John Shaw online4
            '2394', //John Shaw shawjc@pitt.edu
            '74497', //Megan Kappel online5
            '4404', //Megan Kappel kappel@pitt.edu
            '74501', //Allene Hyatt online6
            '154706', //Allene Hyatt als699@pitt.edu
            '74509', //Santa Pastorius online8
            '108501', //Santa Pastorius spastorius@pitt.edu
            '74513', //Robin Albright online9
            '2312', //Robin Albright ref54@pitt.edu
            '74484', //Lex Drozd online12
            '2589', //Lex Drozd amdrozd@pitt.edu
            '74476', //Barbara Frey online10
            '2428', //Barbara Frey bafrey@pitt.edu
            '106238', //Lindsay Onufer Teasup02@pitt.edu
            '2614', //Lindsay Onufer LRO8@pitt.edu
            '163663', //Jennifer Cooper Teasup06@pitt.edu
            '161234', //Jennifer Cooper jlc321@pitt.edu
            '74480', //Natalia Echeverry online11@pitt.edu
            '29316', //Natalia Echeverry nataliaecheverry@pitt.edu
            '202659', //Rebecca Yost online13@pitt.edu
            '201281', //Rebecca Yost rey31@pitt.edu
            '2617', //Dan Toader dat119@pitt.edu
            '2370', //Michael Casella mic70@pitt.edu
            '2302', //Cressida Magaro clm162@pitt.edu
            
        ],
		 // OPTIONAL: Relocate Ally alternative formats dropdown and hide heading
		 overrideAllyHeadings: false,
		 // OPTIONAL: Make assignment rubrics sortable
		 sortableRubrics: false,
		 // OPTIONAL: Transform people page ina course to show student cards
		 showStudentCards: false
};

// New
DpPrimary = {
    lms: 'canvas',
    templateCourse: '234912',
    hideButton: true,
    extendedCourse: '', // added in sub-account theme
    sharedCourse: '', // added from localStorage
    courseFormats: [],
    canvasRoles: [],
    canvasUsers: [
            '74488', //Stephen Butler online3
            '12552', //Stephen Butler smb285@pitt.edu
            '74493', //John Shaw online4
            '2394', //John Shaw shawjc@pitt.edu
            '74497', //Megan Kappel online5
            '4404', //Megan Kappel kappel@pitt.edu
            '74501', //Allene Hyatt online6
            '154706', //Allene Hyatt als699@pitt.edu
            '74509', //Santa Pastorius online8
            '108501', //Santa Pastorius spastorius@pitt.edu
            '74513', //Robin Albright online9
            '2312', //Robin Albright ref54@pitt.edu
            '74484', //Lex Drozd online12
            '2589', //Lex Drozd amdrozd@pitt.edu
            '74476', //Barbara Frey online10
            '2428', //Barbara Frey bafrey@pitt.edu
            '106238', //Lindsay Onufer Teasup02@pitt.edu
            '2614', //Lindsay Onufer LRO8@pitt.edu
            '163663', //Jennifer Cooper Teasup06@pitt.edu
            '161234', //Jennifer Cooper jlc321@pitt.edu
            '74480', //Natalia Echeverry online11@pitt.edu
            '29316', //Natalia Echeverry nataliaecheverry@pitt.edu
            '202659', //Rebecca Yost online13@pitt.edu
            '201281', //Rebecca Yost rey31@pitt.edu
            '2617', //Dan Toader dat119@pitt.edu
            '2370', //Michael Casella mic70@pitt.edu
            '2302', //Cressida Magaro clm162@pitt.edu
            ],
    canvasCourseIds: [],
    plugins: [],
    excludedModules: [],
    includedModules: [],
    lang: 'en',
    defaultToLegacy: false,
    enableVersionSwitching: true,
}

// merge with extended/shared customizations config
DpConfig = { ...DpPrimary, ...(window.DpConfig ?? {}) }

$(function () {
    const uriPrefix = (location.href.includes('.beta.')) ? 'beta.' : '';
    const toolsUri = (DpConfig.toolsUri) ? DpConfig.toolsUri : `https://${uriPrefix}designplus.ciditools.com/`;
    $.getScript(`${toolsUri}js/controller.js`);
});
////////////////////////////////////////////////////
// END DESIGNPLUS CONFIG                        //
////////////////////////////////////////////////////

//9.7.2019 DEA23 Pitt Case 03617412: Remove Facebook and Twitter links from user dashboard
$('a[href="http://facebook.com/instructure"]').remove();
$('a[href="http://twitter.com/instructure"]').remove();

//Explorance
//9.21.2019 DEA23 Pitt Case 03617420:  Added by Explorance, Blue integration to open popups to teaching surveys.
//1.21.2020 DEA23 Pitt Case 03677036:  Commented out javascript during Respondus 2.1.1 Upgrade
//2.1.2020 DEA23 Pitt Case 03678935:  Reactivated javascript after Explorance 2.1.1 upgrade
//2.25.2021 DAT119 Pitt Case 03911447: Updated canvasAPI URL to vanity URL and removed timestamp from BlueCanvasJS.setAttribute
var BLUE_CANVAS_SETUP={connectorUrl:"https://teachingsurvey.pitt.edu/PittBlueConnector/",canvasAPI:"https://canvas.pitt.edu/",domainName:"com.explorance",consumerID:"4ka4tx4nLdejNUrQDGL9zA==",defaultLanguage:"en-us"},BlueCanvasJS=document.createElement("script");BlueCanvasJS.setAttribute("type","text/javascript");BlueCanvasJS.setAttribute("src","https://teachingsurvey.pitt.edu/PittBlueConnector//Scripts/Canvas/BlueCanvas.min.js");document.getElementsByTagName("head")[0].appendChild(BlueCanvasJS);