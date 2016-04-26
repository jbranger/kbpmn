'use strict';

var entryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory');

var is = require('bpmn-js/lib/util/ModelUtil').is;

module.exports = function(group, element) {

	// Only return an entry, if the currently selected
	// element is a start event.

	console.log("Element: ");
	console.log(element);
	console.log("EventDef: " +  element.eventDefinitionType);
	if (is(element, 'bpmn:StartEvent')) {
		group.entries.push(entryFactory.textField({
			id : 'eventCategory',
			description : 'Event category',
			label : 'Category',
			modelProperty : 'eventCategory'
		}));

		group.entries.push(entryFactory.textField({
			id : 'eventName',
			description : 'Event name',
			label : 'Event Name',
			modelProperty : 'eventName'
		}));

		group.entries.push(entryFactory.textField({
			id : 'eventType',
			description : 'Event type',
			label : 'Event Type',
			modelProperty : 'eventType'
		}));

		group.entries.push(entryFactory.textField({
			id : 'eventDescription',
			description : 'Event description',
			label : 'Description',
			modelProperty : 'eventDescription'
		}));
	}
	
	if (is(element,'bpmn:ExclusiveGateway')) {
		group.entries.push(entryFactory.textField({
			id : 'ExclusiveGatewayName',
			description : 'Gateway Name',
			label : 'Gateway Name',
			modelProperty : 'ExclusiveGatewayName'
		}));
		
		group.entries.push(entryFactory.textField({
			id : 'ExclusiveGatewayType',
			description : 'Gateway Type',
			label : 'Gateway Name',
			modelProperty : 'ExclusiveGatewayType'
		}));
		group.entries.push(entryFactory.textArea({
			id : 'evaluationRules',
			description : 'Evaluation Rules',
			label : 'Evaluation Rules',
			minRows: '7',
			modelProperty : 'evaluationRules'
		}));
		
		group.entries.push(entryFactory.textArea({
			id : 'successLogMessage',
			description : 'Success Log Message ',
			label : 'Success Log Message ',
			modelProperty : 'successLogMessage'
		}));
		
		group.entries.push(entryFactory.textArea({
			id : 'errorLogMessage',
			description : 'Error Log Message ',
			label : 'Error Log Message ',
			modelProperty : 'errorLogMessage'
		}));
		
	}
	

	if (is(element, 'bpmn:IntermediateThrowEvent')) {
		group.entries.push(entryFactory.textField({
			id : 'intermediateEventCategory',
			description : 'Intermediate Category',
			label : 'Intermediate Category',
			modelProperty : 'intermediateEventCategory'
		}));
		group.entries.push(entryFactory.textField({
			id : 'intermediateEventName',
			description : 'Intermediate Name',
			label : 'Intermediate Name',
			modelProperty : 'intermediateEventName'
		}));
		group.entries.push(entryFactory.textField({
			id : 'intermediateEventType',
			description : 'Intermediate Type',
			label : 'Intermediate Type',
			modelProperty : 'intermediateEventType'
		}));
		group.entries.push(entryFactory.textArea({
			id : 'intermediateEventDescription',
			description : 'Intermediate Description',
			label : 'Intermediate Description',
			modelProperty : 'intermediateEventDescription'
		}));
	}
	
	// Service Task
	if (is(element, 'bpmn:ServiceTask')) {
		group.entries.push(entryFactory.textField({
			id : 'eventCategory',
			description : 'Event category',
			label : 'Category',
			modelProperty : 'eventCategory'
		}));	
		
		group.entries.push(entryFactory.textField({
			id : 'taskObjectName',
			description : 'Task Object Name',
			label : 'Task Object Name',
			modelProperty : 'taskObjectName'
		}));	
		
		group.entries.push(entryFactory.textField({
			id : 'webServiceURI',
			description : 'Web Service URI',
			label : 'Web Service URI',
			modelProperty : 'webServiceURI'
		}));
		
		group.entries.push(entryFactory.textField({
			id : 'webServiceProtocol',
			description : 'Web Service Protocol',
			label : 'Web Service Protocol',
			modelProperty : 'webServiceProtocol'
		}));
		
		group.entries.push(entryFactory.textField({
			id : 'securityServiceAccountName',
			description : 'Security Service Account Name',
			label : 'Security Service Account Name',
			modelProperty : 'securityServiceAccountName'
		}));
		
		group.entries.push(entryFactory.textField({
			id : 'securityServiceAccountPassword',
			description : 'Security Service Account Password',
			label : 'Security Service Account Password',
			modelProperty : 'securityServiceAccountPassword'
		}));
	}
};