import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceScalarWhereInputSchema } from './ServiceScalarWhereInputSchema';
import { ServiceUpdateManyMutationInputSchema } from './ServiceUpdateManyMutationInputSchema';
import { ServiceUncheckedUpdateManyWithoutCompanyInputSchema } from './ServiceUncheckedUpdateManyWithoutCompanyInputSchema';

export const ServiceUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => ServiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServiceUpdateManyMutationInputSchema),z.lazy(() => ServiceUncheckedUpdateManyWithoutCompanyInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceUpdateManyWithWhereWithoutCompanyInput>;

export default ServiceUpdateManyWithWhereWithoutCompanyInputSchema;
