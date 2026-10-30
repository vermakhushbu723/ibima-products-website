import React from 'react';
import {
    ArrowRight, ArrowUpRight, Check, ChevronDown, Clock, Mail, MapPin, Maximize2, Menu, Minimize2, Pause, Phone,
    Play, Search, X,
} from 'lucide-react';
import {
    FcApproval, FcApprove, FcAutomotive, FcBarChart, FcBusinessman, FcCamcorderPro, FcCamera, FcCameraIdentification,
    FcClock, FcCollaboration, FcComboChart, FcConferenceCall, FcCustomerSupport, FcDataConfiguration,
    FcDataProtection, FcDepartment, FcDocument, FcEngineering, FcFactory, FcFlashOn, FcGlobe, FcHighPriority,
    FcIdea, FcInspection, FcInvite, FcIphone, FcLink, FcLock, FcManager, FcMindMap, FcMoneyTransfer,
    FcOpenedFolder, FcParallelTasks, FcPhone, FcSearch, FcSettings, FcSignature, FcSms, FcSynchronize,
    FcTodoList, FcTreeStructure, FcWorkflow,
} from 'react-icons/fc';

// Content icons are full-colour (Flat Color set); data files refer to
// them by these string keys, which keeps JSX out of src/data.
const COLOR = {
    car: FcAutomotive, clipboard: FcInspection, brain: FcMindMap, headset: FcCustomerSupport, settings: FcSettings,
    cloud: FcDataConfiguration, factory: FcFactory, camera: FcCamera, map: FcGlobe, globe: FcGlobe,
    video: FcCamcorderPro, pen: FcSignature, link: FcLink, wrench: FcEngineering, user: FcBusinessman,
    check: FcApproval, file: FcDocument, shield: FcDataProtection, scan: FcCameraIdentification, gauge: FcBarChart,
    rupee: FcMoneyTransfer, search: FcSearch, refresh: FcSynchronize, phone: FcPhone, users: FcConferenceCall,
    list: FcTodoList, mail: FcInvite, folder: FcOpenedFolder, message: FcSms, userCog: FcManager,
    workflow: FcWorkflow, scale: FcApprove, siren: FcHighPriority, chart: FcComboChart, lock: FcLock,
    building: FcDepartment, layers: FcParallelTasks, handshake: FcCollaboration, network: FcTreeStructure,
    zap: FcFlashOn, sparkles: FcIdea, clock: FcClock, smartphone: FcIphone,
};

// Interface chrome (arrows, menus, small contact glyphs) stays as thin
// line icons so it tints with the surrounding text.
const LINE = {
    arrow: ArrowRight, external: ArrowUpRight, tick: Check, chevron: ChevronDown, menu: Menu, close: X,
    pin: MapPin, call: Phone, email: Mail, time: Clock, find: Search, play: Play, pause: Pause,
    expand: Maximize2, shrink: Minimize2,
};

const Icon = ({ name, size = 20, className = '', strokeWidth = 2 }) => {
    if (LINE[name]) {
        const Cmp = LINE[name];
        return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
    }
    const Cmp = COLOR[name] || FcIdea;
    return <Cmp size={size} className={className} aria-hidden="true" />;
};

export default Icon;
