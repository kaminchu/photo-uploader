import TimelineActions from '../../../src/js/actions/timeline';
import ActionSender from '../lib/action_sender';


const  actions = {
    [TimelineActions.postPhoto]: (action, socket, io) => {
        console.log(action);
        const sender = new ActionSender(socket, io);
        sender.sendMulticast(TimelineActions.changeMessage.toString(), action.payload)
    }
};

export default actions;
