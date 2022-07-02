CREATE TABLE [dbo].[Files] (
    [Id]        INT           IDENTITY (1, 1) NOT NULL,
    [Name]      VARCHAR (100) NULL,
    [DataFiles] VARCHAR (MAX) NULL,
    [UserId]    INT           NULL,
    CONSTRAINT [PK_Files] PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([ID])
);

