"use client";

import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import TeamSidebar from '@/components/shared/sidebars/TeamSidebar';

const TeamDetailsPrimary = ({ pb }) => {
  const { id: currentId } = useParams();
  const team = getTeamMembers().slice(32,39);
  const currentTeam = team?.find(
    ({ id }) => id === parseInt(currentId)
  );
  const { id, name, desig, img, desc } = team?.find(
    ({ id }) => id === parseInt(currentId)
  );
  console.log(currentTeam);
  return (
    <div
      className={`team__details sp_top_140 ${
        pb ? pb : "sp_bottom_140"
      } special__spacing`}
    >
      <div className="container">
        <div className="row">
          <TeamSidebar currentProject={currentTeam} />
          <div
            className="col-xl-8 col-lg-8 col-md-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="team__details__project__manager">
              <div className="team__details__project__manager__content">
                <div className="team__details__project__manager__title">
                  <h6>{name}</h6>
                  <span className="text__gradient">{desig}</span>
                </div>
                <div className="team__details__project__manager__text">
                  <p>
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsPrimary;
