import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';
import { ServiceCreateWithoutCompanyInputSchema } from './ServiceCreateWithoutCompanyInputSchema';
import { ServiceUncheckedCreateWithoutCompanyInputSchema } from './ServiceUncheckedCreateWithoutCompanyInputSchema';

export const ServiceCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceCreateWithoutCompanyInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceCreateOrConnectWithoutCompanyInput>;

export default ServiceCreateOrConnectWithoutCompanyInputSchema;
