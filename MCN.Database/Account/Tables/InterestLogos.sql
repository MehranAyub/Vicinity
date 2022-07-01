CREATE TABLE [Account].[InterestLogos] (
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [DataFiles]  VARCHAR (MAX) NULL,
    [InterestId] INT           NOT NULL,
    CONSTRAINT [PK_Files] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Logos_Interests_Id] FOREIGN KEY ([InterestId]) REFERENCES [Account].[Interest] ([Id]) ON DELETE CASCADE
);

