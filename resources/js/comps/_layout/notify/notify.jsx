import React from "react";
import { 
  NotificationsProvider, 
  showNotification, 
  updateNotification, 
  cleanNotifications 
} from '@mantine/notifications';

// ==============================================

const showNotify = ({ id="notification", title, message, autoClose=false, disallowClose=false, color='light', icon=null, loading=false, borderRadius='50%', onClose=()=>{}})  => {
  showNotification({
    id,
    loading,
    title,
    message,
    autoClose,
    disallowClose,
    styles: { icon: { borderRadius } },
    color,
    icon: (
      <lottie-player 
        // id="lottie-player-1" 
        src="/ae/adobe-loading-animation--rounded-7dot-5px--dark.json"
        background="transparent"
        speed="1"
        loop  
        autoplay
      >
      </lottie-player>
    ),
    onClose,
  });
};

// ==============================================

const updateNotify = ({ id="notification", title, message, autoClose=3000, disallowClose=false, color='light', icon=null, loading=false, borderRadius='50%', onClose=()=>{} }) => {


  console.log('updateNotify');


  updateNotification({
    id,
    loading,
    title,
    message,
    autoClose,
    disallowClose,
    styles: { icon: { borderRadius } },
    color,
    icon,
    onClose,
  });
};


// ==============================================

export { showNotify, updateNotify };