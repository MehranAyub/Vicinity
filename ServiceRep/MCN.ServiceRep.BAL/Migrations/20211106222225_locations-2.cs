using Microsoft.EntityFrameworkCore.Migrations;

namespace MCN.ServiceRep.BAL.Migrations
{
    public partial class locations2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LocationId",
                schema: "Account",
                table: "UserInterest",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_UserInterest_InterestId",
                schema: "Account",
                table: "UserInterest",
                column: "InterestId");

            migrationBuilder.CreateIndex(
                name: "IX_UserInterest_LocationId",
                schema: "Account",
                table: "UserInterest",
                column: "LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserInterest_Interest_InterestId",
                schema: "Account",
                table: "UserInterest",
                column: "InterestId",
                principalSchema: "Account",
                principalTable: "Interest",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UserInterest_Location_LocationId",
                schema: "Account",
                table: "UserInterest",
                column: "LocationId",
                principalSchema: "Account",
                principalTable: "Location",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserInterest_Interest_InterestId",
                schema: "Account",
                table: "UserInterest");

            migrationBuilder.DropForeignKey(
                name: "FK_UserInterest_Location_LocationId",
                schema: "Account",
                table: "UserInterest");

            migrationBuilder.DropIndex(
                name: "IX_UserInterest_InterestId",
                schema: "Account",
                table: "UserInterest");

            migrationBuilder.DropIndex(
                name: "IX_UserInterest_LocationId",
                schema: "Account",
                table: "UserInterest");

            migrationBuilder.DropColumn(
                name: "LocationId",
                schema: "Account",
                table: "UserInterest");
        }
    }
}
