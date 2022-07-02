using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MCN.Core.Entities.Entities
{
   public class Chat
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Message { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsDelete { get; set; }
        public int Sender { get; set; } 
        public int Receiver { get; set; }
    }
}
