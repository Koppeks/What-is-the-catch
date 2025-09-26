import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateWithoutServiceInputSchema } from './ServiceDomainCreateWithoutServiceInputSchema';
import { ServiceDomainUncheckedCreateWithoutServiceInputSchema } from './ServiceDomainUncheckedCreateWithoutServiceInputSchema';
import { ServiceDomainCreateOrConnectWithoutServiceInputSchema } from './ServiceDomainCreateOrConnectWithoutServiceInputSchema';
import { ServiceDomainUpsertWithWhereUniqueWithoutServiceInputSchema } from './ServiceDomainUpsertWithWhereUniqueWithoutServiceInputSchema';
import { ServiceDomainCreateManyServiceInputEnvelopeSchema } from './ServiceDomainCreateManyServiceInputEnvelopeSchema';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';
import { ServiceDomainUpdateWithWhereUniqueWithoutServiceInputSchema } from './ServiceDomainUpdateWithWhereUniqueWithoutServiceInputSchema';
import { ServiceDomainUpdateManyWithWhereWithoutServiceInputSchema } from './ServiceDomainUpdateManyWithWhereWithoutServiceInputSchema';
import { ServiceDomainScalarWhereInputSchema } from './ServiceDomainScalarWhereInputSchema';

export const ServiceDomainUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.ServiceDomainUpdateManyWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceDomainCreateWithoutServiceInputSchema),z.lazy(() => ServiceDomainCreateWithoutServiceInputSchema).array(),z.lazy(() => ServiceDomainUncheckedCreateWithoutServiceInputSchema),z.lazy(() => ServiceDomainUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceDomainCreateOrConnectWithoutServiceInputSchema),z.lazy(() => ServiceDomainCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceDomainUpsertWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => ServiceDomainUpsertWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceDomainCreateManyServiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceDomainUpdateWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => ServiceDomainUpdateWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceDomainUpdateManyWithWhereWithoutServiceInputSchema),z.lazy(() => ServiceDomainUpdateManyWithWhereWithoutServiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceDomainScalarWhereInputSchema),z.lazy(() => ServiceDomainScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateManyWithoutServiceNestedInput>;

export default ServiceDomainUpdateManyWithoutServiceNestedInputSchema;
