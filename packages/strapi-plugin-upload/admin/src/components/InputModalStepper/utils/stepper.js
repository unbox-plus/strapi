import EditForm from '../../EditForm';
import UploadForm from '../../UploadForm';
import UploadList from '../../UploadList';
import getTrad from '../../../utils/getTrad';
import ListModal from '../../ListModal';
import Search from '../Search';

const stepper = {
  list: {
    Component: ListModal,
    HeaderComponent: Search,
    prev: null,
    next: null,
  },
  browse: {
    Component: UploadForm,
    headerBreadcrumbs: [getTrad('modal.header.browse')],
    prev: 'list',
    next: 'upload',
    withBackButton: true,
  },
  upload: {
    Component: UploadList,
    headerBreadcrumbs: [getTrad('modal.header.select-files')],
    next: null,
    prev: 'browse',
  },
  'edit-new': {
    Component: EditForm,
    // TODO: I'll leave it there for the moment
    // because I am not sure about the design since it seems inconsistent
    // headerBreadcrumbs: [
    //   getTrad('modal.header.select-files'),
    //   getTrad('modal.header.file-detail'),
    // ],
    headerBreadcrumbs: [getTrad('modal.header.file-detail')],
    next: 'upload',
    prev: 'upload',
    withBackButton: true,
  },
};

export default stepper;
