import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateWithoutCompanyInputSchema } from './ServiceCreateWithoutCompanyInputSchema';
import { ServiceUncheckedCreateWithoutCompanyInputSchema } from './ServiceUncheckedCreateWithoutCompanyInputSchema';
import { ServiceCreateOrConnectWithoutCompanyInputSchema } from './ServiceCreateOrConnectWithoutCompanyInputSchema';
import { ServiceUpsertWithWhereUniqueWithoutCompanyInputSchema } from './ServiceUpsertWithWhereUniqueWithoutCompanyInputSchema';
import { ServiceCreateManyCompanyInputEnvelopeSchema } from './ServiceCreateManyCompanyInputEnvelopeSchema';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';
import { ServiceUpdateWithWhereUniqueWithoutCompanyInputSchema } from './ServiceUpdateWithWhereUniqueWithoutCompanyInputSchema';
import { ServiceUpdateManyWithWhereWithoutCompanyInputSchema } from './ServiceUpdateManyWithWhereWithoutCompanyInputSchema';
import { ServiceScalarWhereInputSchema } from './ServiceScalarWhereInputSchema';

export const ServiceUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateManyWithoutCompanyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ServiceCreateWithoutCompanyInputSchema), z.lazy(() => ServiceCreateWithoutCompanyInputSchema).array(), z.lazy(() => ServiceUncheckedCreateWithoutCompanyInputSchema), z.lazy(() => ServiceUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceCreateOrConnectWithoutCompanyInputSchema), z.lazy(() => ServiceCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceUpsertWithWhereUniqueWithoutCompanyInputSchema), z.lazy(() => ServiceUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema), z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema), z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema), z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema), z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateWithWhereUniqueWithoutCompanyInputSchema), z.lazy(() => ServiceUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceUpdateManyWithWhereWithoutCompanyInputSchema), z.lazy(() => ServiceUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceScalarWhereInputSchema), z.lazy(() => ServiceScalarWhereInputSchema).array() ]).optional(),
});

export default ServiceUncheckedUpdateManyWithoutCompanyNestedInputSchema;
