import Home from './pages/Home.vue';
import ActionSheet from './pages/ActionSheet.vue';
import Badge from './pages/Badge.vue';
import Breadcrumbs from './pages/Breadcrumbs.vue';
import Buttons from './pages/Buttons.vue';
import Cards from './pages/Cards.vue';
import Checkbox from './pages/Checkbox.vue';
import Chips from './pages/Chips.vue';
import ContactsList from './pages/ContactsList.vue';
import ContentBlock from './pages/ContentBlock.vue';
import DataTable from './pages/DataTable.vue';
import Dialog from './pages/Dialog.vue';
import Fab from './pages/Fab.vue';
import FormInputs from './pages/FormInputs.vue';
import List from './pages/List.vue';
import ListButton from './pages/ListButton.vue';
import MenuList from './pages/MenuList.vue';
import Messages from './pages/Messages.vue';
import Navbar from './pages/Navbar.vue';
import Notification from './pages/Notification.vue';
import Panel from './pages/SidePanels.vue';
import Popover from './pages/Popover.vue';
import Popup from './pages/Popup.vue';
import Preloader from './pages/Preloader.vue';
import Progressbar from './pages/Progressbar.vue';
import Radio from './pages/Radio.vue';
import RangeSlider from './pages/RangeSlider.vue';
import Searchbar from './pages/Searchbar.vue';
import SegmentedControl from './pages/SegmentedControl.vue';
import SheetModal from './pages/SheetModal.vue';
import Stepper from './pages/Stepper.vue';
import Subnavbar from './pages/Subnavbar.vue';
import Tabbar from './pages/Tabbar.vue';
import Toast from './pages/Toast.vue';
import Toggle from './pages/Toggle.vue';
import Toolbar from './pages/Toolbar.vue';

const routes = [
  Home,
  ActionSheet,
  Badge,
  Breadcrumbs,
  Buttons,
  Cards,
  Checkbox,
  Chips,
  ContactsList,
  ContentBlock,
  DataTable,
  Dialog,
  Fab,
  FormInputs,
  List,
  ListButton,
  MenuList,
  Messages,
  Navbar,
  Notification,
  Panel,
  Popover,
  Popup,
  Preloader,
  Progressbar,
  Radio,
  RangeSlider,
  Searchbar,
  SegmentedControl,
  SheetModal,
  Stepper,
  Subnavbar,
  Tabbar,
  Toast,
  Toggle,
  Toolbar,
].map((component) => {
  const name = component.name;
  const path = `/${name
    .split('Page')[0]
    .split('')
    .map((char, index) =>
      char.match(/[A-Z]/) && index !== 0 ? `-${char}` : char
    )
    .join('')
    .toLowerCase()}`;
  const title =
    component.title ||
    name
      .split('Page')[0]
      .split('')
      .map((char, index) =>
        char.match(/[A-Z]/) && index !== 0 ? ` ${char}` : char
      )
      .join('');
  return {
    component,
    path: name === 'HomePage' ? '/' : path,
    title,
  };
});
routes.sort((a, b) => (a.title > b.title ? 1 : -1));

export default routes;
