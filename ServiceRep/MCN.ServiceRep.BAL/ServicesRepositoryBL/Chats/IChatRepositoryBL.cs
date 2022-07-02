using MCN.Common.AttribParam;
using MCN.ServiceRep.BAL.ServicesRepositoryBL.Chats.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace MCN.ServiceRep.BAL.ServicesRepositoryBL.Chats
{
    public interface IChatRepositoryBL
    {
        public SwallResponseWrapper GetChats(int currentUserId, int sellerUserId);
        SwallResponseWrapper CreateChat(string message, int SenderId, int ReceiverId);
    }
}
