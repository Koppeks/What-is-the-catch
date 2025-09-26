import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainUpdateWithoutCompanyInputSchema } from './DomainUpdateWithoutCompanyInputSchema';
import { DomainUncheckedUpdateWithoutCompanyInputSchema } from './DomainUncheckedUpdateWithoutCompanyInputSchema';

export const DomainUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => DomainWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DomainUpdateWithoutCompanyInputSchema),z.lazy(() => DomainUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict() as z.ZodType<Prisma.DomainUpdateWithWhereUniqueWithoutCompanyInput>;

export default DomainUpdateWithWhereUniqueWithoutCompanyInputSchema;
