CREATE TABLE [dbo].[Chats] (
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [Message]   NVARCHAR (MAX) NULL,
    [CreatedAt] DATETIME       NULL,
    [IsDelete]  BIT            NULL,
    [Sender]    INT            NULL,
    [Receiver]  INT            NULL,
    CONSTRAINT [PK_Chats] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_UserChats_Users_UserId] FOREIGN KEY ([Id]) REFERENCES [dbo].[Chats] ([Id])
);

