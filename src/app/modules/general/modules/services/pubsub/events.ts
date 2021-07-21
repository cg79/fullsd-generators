/**
 * Created by Claudiu on 6/5/2019.
 */

enum EEvents
{
  DirectoryClicked= 'directoryClicked',
  GetRoomsForDomain = 'getRoomsForDomain',
  Logger='logger',
  ChatCreate = 'chat_create',
  ChatClose= 'chat_close',
  Login= 'login',
  Logout= 'logout',
  SocketConnected= 'SocketConnected',
  SocketDisconnected= 'SocketDisconnected',
  Redirect = 'redirect',
  CollapseExpand = 'CollapseExpand',

  QuestionAdd_Edit = 'QuestionAdd_Edit',
  QLIST = 'QLIST',
  RoomSnapshot = 'rsnap',

  Question_ADDED = 'qadded',

  POINTS_RECEIVED = 'preceived',
  MoneyInc = 'minc',
  MoneyDec = 'mdec',

  newtoken = 'ntoken',
  REFRESH_PAYMENT_HIST = 'rphh',

  LOGGEDUSER = 'LOGGED_USER',

  CHAT_MESSAGE = 'chatMessage',

  AMOUNT_CHANGED = 'inAMOUNT_CHANGED',

  SERVER_MESSAGE = 'serverMessage',

  IN_ONLINE_USERS= 'inonlineUsers',
  IN_NEW_MESSAGE = 'inNEW_MESSAGE',

  REFRESH = 'refresh',
  TOASTER_NOTIF = 'toasternotif',


  CHANGE_LANGUAGE ='change-language',

  NEW_PAYMENT = 'new_payment',

}


export default EEvents;
