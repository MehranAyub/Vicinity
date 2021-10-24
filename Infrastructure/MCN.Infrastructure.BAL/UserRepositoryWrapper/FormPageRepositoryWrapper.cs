﻿using OnlineApp.Infrastructure.BAL.Repository;
using OnlineApp.ServiceRep.BAL.ContextModel;
using OnlineApp.ServiceRep.BAL.Repository;
using OnlineApp.ServiceRep.BAL.UserRepositoryWrapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineApp.Infrastructure.BAL.UserRepositoryWrapper
{
    public class FormPageRepositoryWrapper : RepositoryBase<FormPage>, IFormPageRepositoryWrapper
    {
        public FormPageRepositoryWrapper(RepositoryContext repositoryContext)
            : base(repositoryContext)
        {
        }
    }
}
