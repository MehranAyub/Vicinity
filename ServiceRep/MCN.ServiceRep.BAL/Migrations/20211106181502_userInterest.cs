using Microsoft.EntityFrameworkCore.Migrations;

namespace MCN.ServiceRep.BAL.Migrations
{
    public partial class userInterest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Interest_Users_UserID",
                schema: "Account",
                table: "Interest");

            migrationBuilder.DropIndex(
                name: "IX_Interest_UserID",
                schema: "Account",
                table: "Interest");

            migrationBuilder.DropColumn(
                name: "UserID",
                schema: "Account",
                table: "Interest");

            migrationBuilder.CreateTable(
                name: "UserInterest",
                schema: "Account",
                columns: table => new
                {
                    InterestId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInterest", x => new { x.UserId, x.InterestId });
                    table.ForeignKey(
                        name: "FK_UserInterest_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserInterest",
                schema: "Account");

            migrationBuilder.AddColumn<int>(
                name: "UserID",
                schema: "Account",
                table: "Interest",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Interest_UserID",
                schema: "Account",
                table: "Interest",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_Interest_Users_UserID",
                schema: "Account",
                table: "Interest",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
