import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionCreateWithoutHeadingBlockInputSchema } from './SectionCreateWithoutHeadingBlockInputSchema';
import { SectionUncheckedCreateWithoutHeadingBlockInputSchema } from './SectionUncheckedCreateWithoutHeadingBlockInputSchema';

export const SectionCreateOrConnectWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionCreateOrConnectWithoutHeadingBlockInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SectionCreateWithoutHeadingBlockInputSchema), z.lazy(() => SectionUncheckedCreateWithoutHeadingBlockInputSchema) ]),
});

export default SectionCreateOrConnectWithoutHeadingBlockInputSchema;
