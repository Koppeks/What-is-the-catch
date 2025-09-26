import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';
import { ServiceUpdateWithoutCompanyInputSchema } from './ServiceUpdateWithoutCompanyInputSchema';
import { ServiceUncheckedUpdateWithoutCompanyInputSchema } from './ServiceUncheckedUpdateWithoutCompanyInputSchema';

export const ServiceUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutCompanyInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceUpdateWithWhereUniqueWithoutCompanyInput>;

export default ServiceUpdateWithWhereUniqueWithoutCompanyInputSchema;
