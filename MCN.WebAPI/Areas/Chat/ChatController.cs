using MCN.Common.AttribParam;
using MCN.ServiceRep.BAL.ServicesRepositoryBL.Chats;
using MCN.ServiceRep.BAL.ServicesRepositoryBL.Chats.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCN.WebAPI.Areas.Chats
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ChatController : ControllerBase
    {
        private readonly IChatRepositoryBL _chatRepositoryBL;
        public ChatController(IChatRepositoryBL chatRepositoryBL)
        {
            _chatRepositoryBL = chatRepositoryBL;
        }

        [HttpGet]
        [Route("Create")]
        public IActionResult Create(string message,int SellerId)
        {
            var currentUser = User.Claims.FirstOrDefault(x => x.Type == "loggedUserId");
            var result = _chatRepositoryBL.CreateChat(message,int.Parse(currentUser.Value), SellerId);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetChats")]
        public IActionResult GetChats(int sellerId)
        {
            var currentUser = User.Claims.FirstOrDefault(x => x.Type == "loggedUserId");
            var result = _chatRepositoryBL.GetChats(int.Parse(currentUser.Value), sellerId);
            return Ok(result);
        }
    }
}
