import TeamCard2 from "@/components/shared/cards/TeamCard2";
import Nodata from "@/components/shared/no-data/Nodata";
import getClients from "@/libs/getClients";
import Link from "next/link";
import React from "react";
import getTeamMembers from "@/libs/getTeamMembers";

const TeamPrimary = ({ pt, type }) => {
  const totalTeam = getTeamMembers().slice(5, 11);
  const team = [
    ...totalTeam,
  ];
  console.log(team);
  return (
    <div
      className={`service__details ${
        pt ? pt : " sp_top_140"
      } sp_bottom_140 special__spacing`}
    >
      <div className="container">
        <div className="row">
          {!team?.length ? (
            <Nodata text={"No Member"} />
          ) : (
            team?.map((teamSingle, idx) => (
              <TeamCard2 key={idx} teamSingle={teamSingle} type={2} />
            ))
          )}
          <div
            className={`${type === 2 ? "col-xxl-3 col-xl-4" : "col-xl-12"} `}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="team__details__button text-center">
              <Link className="default__button btn__black " href="/contact">
                JOIN WITH US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPrimary;
