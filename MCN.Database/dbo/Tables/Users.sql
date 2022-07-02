CREATE TABLE [dbo].[Users] (
    [ID]                INT            IDENTITY (1, 1) NOT NULL,
    [Email]             NVARCHAR (MAX) NULL,
    [Password]          NVARCHAR (MAX) NULL,
    [FirstName]         NVARCHAR (MAX) NULL,
    [LastName]          NVARCHAR (MAX) NULL,
    [Gender]            NVARCHAR (MAX) NULL,
    [IsEmailVerified]   BIT            NOT NULL,
    [IsActive]          BIT            NULL,
    [LoginFailureCount] INT            NOT NULL,
    [CreatedOn]         DATETIME2 (7)  NULL,
    [CreatedBy]         INT            NULL,
    [UpdatedOn]         DATETIME2 (7)  NULL,
    [UpdatedBy]         INT            NULL,
    [UserLoginTypeId]   INT            NULL,
    [Latitude]          FLOAT (53)     CONSTRAINT [DF__Users__Latitude__32E0915F] DEFAULT ((0.0000000000000000e+000)) NOT NULL,
    [Longitude]         FLOAT (53)     CONSTRAINT [DF__Users__Longitude__33D4B598] DEFAULT ((0.0000000000000000e+000)) NOT NULL,
    [Address]           NVARCHAR (MAX) NULL,
    [Phone]             NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([ID] ASC)
);







