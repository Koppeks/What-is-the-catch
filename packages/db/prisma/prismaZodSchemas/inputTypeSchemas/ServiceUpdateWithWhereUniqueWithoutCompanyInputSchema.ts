import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';
import { ServiceUpdateWithoutCompanyInputSchema } from './ServiceUpdateWithoutCompanyInputSchema';
import { ServiceUncheckedUpdateWithoutCompanyInputSchema } from './ServiceUncheckedUpdateWithoutCompanyInputSchema';

export const ServiceUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceUpdateWithWhereUniqueWithoutCompanyInput> = z.strictObject({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutCompanyInputSchema), z.lazy(() => ServiceUncheckedUpdateWithoutCompanyInputSchema) ]),
});

export default ServiceUpdateWithWhereUniqueWithoutCompanyInputSchema;
