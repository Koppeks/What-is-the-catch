import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';
import { ServiceUpdateWithoutCompanyInputSchema } from './ServiceUpdateWithoutCompanyInputSchema';
import { ServiceUncheckedUpdateWithoutCompanyInputSchema } from './ServiceUncheckedUpdateWithoutCompanyInputSchema';
import { ServiceCreateWithoutCompanyInputSchema } from './ServiceCreateWithoutCompanyInputSchema';
import { ServiceUncheckedCreateWithoutCompanyInputSchema } from './ServiceUncheckedCreateWithoutCompanyInputSchema';

export const ServiceUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceUpsertWithWhereUniqueWithoutCompanyInput> = z.strictObject({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServiceUpdateWithoutCompanyInputSchema), z.lazy(() => ServiceUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceCreateWithoutCompanyInputSchema), z.lazy(() => ServiceUncheckedCreateWithoutCompanyInputSchema) ]),
});

export default ServiceUpsertWithWhereUniqueWithoutCompanyInputSchema;
