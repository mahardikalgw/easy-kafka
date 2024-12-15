import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-producer",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: "kafka-topic-2",
    messages: [{ value: "Hello KafkaJS with LegacyPartitioner!" }],
  });
  console.log("Message sent!");
  await producer.disconnect();
};

run().catch(console.error);
