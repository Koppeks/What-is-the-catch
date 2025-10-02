import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainUpdateWithoutCompanyInputSchema } from './DomainUpdateWithoutCompanyInputSchema';
import { DomainUncheckedUpdateWithoutCompanyInputSchema } from './DomainUncheckedUpdateWithoutCompanyInputSchema';

export const DomainUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUpdateWithWhereUniqueWithoutCompanyInput> = z.strictObject({
  where: z.lazy(() => DomainWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DomainUpdateWithoutCompanyInputSchema), z.lazy(() => DomainUncheckedUpdateWithoutCompanyInputSchema) ]),
});

export default DomainUpdateWithWhereUniqueWithoutCompanyInputSchema;
