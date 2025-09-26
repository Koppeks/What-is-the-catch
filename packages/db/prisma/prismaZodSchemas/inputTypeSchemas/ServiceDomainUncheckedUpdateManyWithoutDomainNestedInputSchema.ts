import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateWithoutDomainInputSchema } from './ServiceDomainCreateWithoutDomainInputSchema';
import { ServiceDomainUncheckedCreateWithoutDomainInputSchema } from './ServiceDomainUncheckedCreateWithoutDomainInputSchema';
import { ServiceDomainCreateOrConnectWithoutDomainInputSchema } from './ServiceDomainCreateOrConnectWithoutDomainInputSchema';
import { ServiceDomainUpsertWithWhereUniqueWithoutDomainInputSchema } from './ServiceDomainUpsertWithWhereUniqueWithoutDomainInputSchema';
import { ServiceDomainCreateManyDomainInputEnvelopeSchema } from './ServiceDomainCreateManyDomainInputEnvelopeSchema';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';
import { ServiceDomainUpdateWithWhereUniqueWithoutDomainInputSchema } from './ServiceDomainUpdateWithWhereUniqueWithoutDomainInputSchema';
import { ServiceDomainUpdateManyWithWhereWithoutDomainInputSchema } from './ServiceDomainUpdateManyWithWhereWithoutDomainInputSchema';
import { ServiceDomainScalarWhereInputSchema } from './ServiceDomainScalarWhereInputSchema';

export const ServiceDomainUncheckedUpdateManyWithoutDomainNestedInputSchema: z.ZodType<Prisma.ServiceDomainUncheckedUpdateManyWithoutDomainNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceDomainCreateWithoutDomainInputSchema),z.lazy(() => ServiceDomainCreateWithoutDomainInputSchema).array(),z.lazy(() => ServiceDomainUncheckedCreateWithoutDomainInputSchema),z.lazy(() => ServiceDomainUncheckedCreateWithoutDomainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceDomainCreateOrConnectWithoutDomainInputSchema),z.lazy(() => ServiceDomainCreateOrConnectWithoutDomainInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceDomainUpsertWithWhereUniqueWithoutDomainInputSchema),z.lazy(() => ServiceDomainUpsertWithWhereUniqueWithoutDomainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceDomainCreateManyDomainInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceDomainUpdateWithWhereUniqueWithoutDomainInputSchema),z.lazy(() => ServiceDomainUpdateWithWhereUniqueWithoutDomainInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceDomainUpdateManyWithWhereWithoutDomainInputSchema),z.lazy(() => ServiceDomainUpdateManyWithWhereWithoutDomainInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceDomainScalarWhereInputSchema),z.lazy(() => ServiceDomainScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ServiceDomainUncheckedUpdateManyWithoutDomainNestedInput>;

export default ServiceDomainUncheckedUpdateManyWithoutDomainNestedInputSchema;
