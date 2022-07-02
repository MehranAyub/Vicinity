using System;
using System.Collections.Generic;
using System.Text;

namespace MCN.ServiceRep.BAL.ServicesRepositoryBL.Chats.Dtos
{
  public  class ChatDto
    { 
            public int Id { get; set; }
            public string Message { get; set; }
            public DateTime CreatedAt { get; set; }
            public bool IsDelete { get; set; }
        public int Sender { get; set; }
        public int Receiver { get; set; }
    }
}
