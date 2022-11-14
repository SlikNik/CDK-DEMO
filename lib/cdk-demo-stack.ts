import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// Importing the EC2 Module
import * as ec2 from "aws-cdk-lib/aws-ec2";

export class CdkDemoStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here

        // example resource
        // const queue = new sqs.Queue(this, 'CdkDemoQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });

        // creating a very simple setup spanning two AZs, and with a public subnet for each.
        // resource for a more detailed explanation of the differences:
        // https://aws.amazon.com/getting-started/guides/setup-cdk/module-three/?refid=8cf60505-fce7-4c6d-989a-0a317428e65d~ha_awssm-8952_rank#:~:text=each.%20Please%20read-,this%20document%C2%A0,-for%20a%20more

        // We have created the VPC object from the VPC class
        new ec2.Vpc(this, "mainVPC", {
            // This is where you can define how many AZs you want to use
            maxAzs: 2,
            // This is where you can define the subnet configuration per AZ
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: "public-subnet",
                    subnetType: ec2.SubnetType.PUBLIC,
                },
            ],
        });
    }
}
