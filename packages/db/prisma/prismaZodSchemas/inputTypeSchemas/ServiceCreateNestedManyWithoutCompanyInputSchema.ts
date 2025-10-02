import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateWithoutCompanyInputSchema } from './ServiceCreateWithoutCompanyInputSchema';
import { ServiceUncheckedCreateWithoutCompanyInputSchema } from './ServiceUncheckedCreateWithoutCompanyInputSchema';
import { ServiceCreateOrConnectWithoutCompanyInputSchema } from './ServiceCreateOrConnectWithoutCompanyInputSchema';
import { ServiceCreateManyCompanyInputEnvelopeSchema } from './ServiceCreateManyCompanyInputEnvelopeSchema';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';

export const ServiceCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceCreateNestedManyWithoutCompanyInput> = z.strictObject({
  create: z.union([ z.lazy(() => ServiceCreateWithoutCompanyInputSchema), z.lazy(() => ServiceCreateWithoutCompanyInputSchema).array(), z.lazy(() => ServiceUncheckedCreateWithoutCompanyInputSchema), z.lazy(() => ServiceUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceCreateOrConnectWithoutCompanyInputSchema), z.lazy(() => ServiceCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema), z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
});

export default ServiceCreateNestedManyWithoutCompanyInputSchema;
