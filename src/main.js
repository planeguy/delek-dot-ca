import riot from 'riot';
import 'src/components/clusterfriend-app.tag!';
import 'bluebird';
import assign from 'object.assign';
assign.shim();

riot.mount('*');